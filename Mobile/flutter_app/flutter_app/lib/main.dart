import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class PageRecord<T> {
  List<T> items;
  int page = 1;
  int perPage = 30;
  int totalItems = 0;
  int totalPages = 0;

  getItems() => items;

  //to string
  @override
  String toString() {
    return 'PageRecord{items: $items, page: $page, perPage: $perPage, totalItems: $totalItems, totalPages: $totalPages}';
  }

  PageRecord(
      {required this.items,
      required this.page,
      required this.perPage,
      required this.totalItems,
      required this.totalPages});
  factory PageRecord.fromJson(Map<String, dynamic> json,
      T Function(Map<String, dynamic>) itemConverter) {
    return PageRecord(
      items: List<T>.from(json['items'].map((item) => itemConverter(item))),
      page: json['page'],
      perPage: json['perPage'],
      totalItems: json['totalItems'],
      totalPages: json['totalPages'],
    );
  }
}

class Project {
  final String id;
  final String name;

  //to string
  @override
  String toString() {
    return 'Project{id: $id, name: $name}';
  }

  Project({required this.id, required this.name});
  factory Project.fromJson(Map<String, dynamic> json) {
    return Project(
      id: json['id'],
      name: json['name'],
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Basic Todo list',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        textTheme: const TextTheme(
            headlineMedium: TextStyle(
              fontSize: 48,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
            labelMedium: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
                color: Colors.amber)),
        useMaterial3: true,
      ),
      home: const ProjectScreen(title: 'Todo list app'),
    );
  }
}

class ProjectScreen extends StatefulWidget {
  const ProjectScreen({super.key, required this.title});

  final String title;

  @override
  State<ProjectScreen> createState() => ProjectState();
}

class TaskScreen extends StatelessWidget {
  const TaskScreen({super.key, required this.id, required this.name});

  // Declare a field that holds the Todo.
  final String id;
  final String name;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
            appBar: AppBar(
              title: Text("Task"),
            ),
            backgroundColor: Colors.black,
            body: Stack(children: [
              ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: const Text('Go back!'),
              ),
               Center(
                child: Column(children: [
                  const Text(
                    'Tasks',
                    //we add the color white
                    style: TextStyle(color: Colors.white, fontSize: 48),
                    //style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  Text(
                    'Project : $name',
                    //we add the color white
                    style: TextStyle(color: Colors.white, fontSize: 32),
                    //style: Theme.of(context).textTheme.headlineMedium,
                  ),
                  Row(
                    children: [
                      const Expanded(
                        child: TextField(
                          decoration: InputDecoration(
                            filled: true,
                            fillColor: Colors.white,
                            border: OutlineInputBorder(),
                            labelText: 'Task',
                          ),
                        ),
                      ),
                      ElevatedButton(
                        onPressed: () {},
                        child: const Text('Add'),
                      ),
                    ],
                  )
                ]),
              )
            ])));
  }
}

Future<List<Project>> fetchProjects() async {
  const ip =
      '10.0.2.2'; // We do not use localhost(127.0.0.1) but the ip of the emulator
  const port = '8090';

  final response = await http.get(Uri.parse(
      'http://$ip:$port/api/collections/project/records?page=1&perPage=30'));
  debugPrint("we got response");

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    final j = PageRecord.fromJson(jsonDecode(response.body), Project.fromJson);
    return j.items;
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to load projects');
  }
}

class ProjectState extends State<ProjectScreen> {
  late Future<List<Project>> futureProjects;

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    futureProjects = fetchProjects();

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.primary,
        title: Text(widget.title),
      ),
      backgroundColor: Colors.black,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'Project',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            FutureBuilder<List<Project>>(
              future: futureProjects,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: snapshot.data!
                          .map((project) => OutlinedButton(
                                style: OutlinedButton.styleFrom(
                                  foregroundColor: Colors.red,
                                  side: const BorderSide(
                                    color: Colors.red,
                                  ),
                                ),
                                onPressed: () {
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                        builder: (context) => TaskScreen(
                                            id: project.id,
                                            name: project.name)),
                                  );
                                },
                                child: Text(project.name,
                                    style: Theme.of(context)
                                        .textTheme
                                        .labelMedium),
                              ))
                          .toList());
                } else if (snapshot.hasError) {
                  return Text('Error : ${snapshot.error}');
                }
                // By default, show a loading spinner.
                return const CircularProgressIndicator();
              },
            )
          ],
        ),
      ),
    );
  }
}
