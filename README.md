# Password Generator
This Django application generates secure passwords. It is designed to work both locally and in Azure Web Apps.

Features
Random Password Generation: Create secure and random passwords with customizable length and character sets.
User-Friendly Interface: Simple and intuitive web interface to generate passwords easily.
Deployment Ready: Configured to run seamlessly both locally and on Azure Web Apps.

Installation
## Local Setup
Clone the Repository:

1. git clone https://github.com/yourusername/password-generator.git
  cd password-generator
2. Create and Activate Virtual Environment:
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
3. Install Dependencies:
    pip install -r requirements.txt
4. Run Migrations:
    python manage.py migrate
5. Start the Development Server:
    python manage.py runserver
Open your browser and go to http://127.0.0.1:8000 to see the app running.

## Azure Web Apps Deployment
1.Create an Azure Web App:
Follow the Azure documentation to create a new Web App.

2.Configure Deployment:
Set up continuous deployment from your GitHub repository.

3.Set Environment Variables:
Ensure all required environment variables are configured in the Azure portal.

4.Deploy the Application:
Push your code to the main branch and let Azure handle the deployment.
