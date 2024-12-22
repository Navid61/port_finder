# Port Finder

## Steps to Set Up and Run the `port_finder` Repository

1. **Clone the Repository**:
   - Use the following command to clone the `port_finder` repository:
     ```bash
     git clone git@github.com:Navid61/port_finder.git
     ```

2. **Check Folder Permissions**:
   - Ensure that the `data` folder has the necessary permissions.

3. **Open Docker Desktop**:
   - Start **Docker Desktop**.
   - Open a terminal within Docker Desktop.

4. **Build and Run the Docker Containers**:
   - Execute the following command:
     ```bash
     docker compose up --build
     ```
   - This command will take some time as it downloads additional repositories and files, creates containers, and imports port names into MongoDB.

5. **Verify Containers**:
   - Once all the containers are running correctly, proceed to the next step.

6. **Access the Application**:
   - Open your browser and navigate to:
     ```
     http://localhost:3000
     ```
   - You should now see the user interface.

7. **Troubleshooting**:
   - If you encounter any issues during setup or while running the application, feel free to reach out for help.

### Additional Notes

- To run the program in the **stable version**, ensure all three repositories are switched to the `main` branch. Then, run `git pull` in each repository to ensure you have access to the latest updates.

- To run the program in **development mode**, ensure all repositories are switched to the `dev` branch. Then, run `git pull` in each repository to fetch the latest updates.
