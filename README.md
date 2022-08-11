# employee-tracker
employee tracker is a simple content management system that uses the command line interface (CLI) to access an employee database, retrieve and update employees and or departments. 

## Built with
* Node
* mySQL2 
* javaScript
* inquirer@8.2.4
* console.table
* cfonts


## Installation
* You must be sure to have installed MySql before being able to use this application!
* https://dev.mysql.com/downloads/mysql/

To install: From your terminal run 
git clone git@github.com:KyleAxley/employee-tracker.git

Once the repo has been succesfully clone, navigate to the directory it was cloned and then run "npm i" to install all required packages associated with the application.

After you have installed the required packages you will then need to naviagte to the db directory and then the connection.js file. You will have to change the "user" and "password" to the username and password you chose when installing mySql. Once done, in the command line run "mysql -u 'username' -p" to connect with the mySql.

Once mySql is running you will want to create your database and populate it. You can do so by running "source db/schema.sql" first to create your tables and then "source db/seeds.sql" second to populate the tables. 

* The current database is a simple mock up of a restaurant run by notorious celebrity chef Rorden Gamsey and his team. if you would like to change this you can by editing the seeds file with your own custom departments, roles and employees. Just be sure to run the "source db/schema.sql and source db/seeds.sql" commands again if you plan to edit. 

To run the application as is or after edits you simple need to "quit" out of mySql in your terminal and then run "node index" to start the application. Enjoy!!!

## Demo
https://youtu.be/LFoeD2Foe7E

## Lessons learned
This challenge was at first seemed to be easy but as progession was made it increased in diffculty and there was definitely a couple "walk away" moments particulary with the update employee section, the view manager's employees and then the joins. W3schools was an absolute savior for this challenge. 
