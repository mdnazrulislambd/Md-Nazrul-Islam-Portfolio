# MD. Nazrul Islam - Professional Portfolio

A modern and interactive professional portfolio website built with ASP.NET Core
MVC.

## Technology Stack

- C#, ASP.NET Core MVC (.NET 8)
- Entity Framework Core
- MS SQL Server
- HTML, CSS, JavaScript, Bootstrap 5

## Project Purpose

This portfolio presents professional experience, education, technical skills,
projects, tools and contact information through a data-driven web application.

## Features

| Feature                                                                        | Status                                  |
| ------------------------------------------------------------------------------ | --------------------------------------- |
| Home page (profile, education, skills, experience, tools) read from SQL Server | Done                                    |
| Project showcase                                                               | Done (cards) / Planned (detail pages)   |
| Contact form saved to database                                                 | Done                                    |
| Admin panel (login, message inbox, reply)                                      | Planned                                 |
| Email and WhatsApp contact options                                             | Done (WhatsApp) / Planned (email reply) |

## Getting Started

1. Install the .NET 8 SDK and SQL Server (Express or Developer).
2. Run the SQL scripts in the Database folder in this order: Users,
   SkillCategories, Projects, ContactMessages, then the remaining tables, then
   002_fix_schema.sql and 003_seed_data.sql.
3. Put your connection string in appsettings.Development.json (or User Secrets).
4. Run: dotnet run
5. Open the https://localhost URL shown in the terminal.

## Status

Project Version_1.0.0 Is Publishes --> https://nazrul.tryasp.net/
