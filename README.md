<h2>General Application Information</h2>

ExploreMore is an e-commerce web application that is designed to sell a digital product(online courses). Once a  customer registers, they are able to browse and add courses to cart which they can then purchase with payment and have their order processed.

The application is deployed as a web application in the Cloud. The front-end and back-end apps are each containerized with Docker and hosted on an Amazon EC2 instance. Code is cloned and both apps are built and staged automatically using a Jenkins script. CI/CD using Github web hooks has not been implemented.

Prerequisites/Additional software needed to get started
The following programs must be installed in the server in order to leverage containerization and automatic building, staging and deployment with Jenkins: Maven, Git, JDK11, epel, Jenkins, Docker, Docker-compose, Nodejs.

How to use:
When navigating to the website, you will start on the landing page. Here it shows the different courses that the website offers. From here you will not be able to purchase courses yet. You then click on SIgn up today button or the register/sign up button in the header. A form pops up where you can enter your desired login information. After you register you are redirected to the login form. Use your credentials to log in. You will then be able to browse courses. Try adding one to your cart. To view your cart click on the cart button. From here you will be able to view the courses that are in your cart, delete individual courses you no longer want, or delete all the courses in your cart. You can then proceed to the checkout where you enter payment and billing information. After you submit your checkout, the courses you purchased will show up in the order history tab in the header. Also in the header you can view your profile and edit it as you please.

Environmental Variables needed to be set
Environmental variables on the back end and the front end both still need to be set: DB_CONNECTION, DB_USER, and DB_PASSWORD on the back end, and production and local environment variables for the respective URLs to which the front end is to connect on the front end. On the back end, this is a matter of replacing values in application.properties with the variable names and then setting environment variables in Jenkins. On the front end, it is a matter of inserting one variable for production back end URL and one for development back end URL and finding a reliable method for switching from local to production with each build.

# Revature Project 3
# Poonga-ExploreMore-1364

Overview:
A Java fullstack sprint to develop an interactive e-commerce website featuring an option for the user to purchase a plethora of skill and information courses.

Features:
* Registration
* Login
* Display Products
* Cart
* Checkout
* View Previous Orders
* Dark Mode
* Search for Products
* View/Edit Profile

Contributors:

MaganaOscar
KyGa96
jhebert85
Sadness117(Logan Needham)
berlypaul360
Goldendeep-kaur
kassandramonterroso
Nikkarev
arifes
LandisDuffet
hangbin236
cjdRevature
goutham217
youssefkhaled1980
akshay-kumar7
kmadjei
mazinskater(Isaac Suttle)
navdeep2808
anil-cmd
NickCerbone
