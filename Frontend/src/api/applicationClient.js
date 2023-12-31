import BaseClass from "../util/baseClass";
import axios from 'axios'

export default class applicationClient extends BaseClass {

    constructor(props = {}){
        super();
        const methodsToBind = ['clientLoaded', 'getApplication', 'getAllApplilcations', 'createApplication', 'updateApplication'];
        this.bindClassMethods(methodsToBind, this);
        this.props = props;
        this.clientLoaded(axios);
    }

    clientLoaded(client) {
        this.client = client;
        if (this.props.hasOwnProperty("onReady")){
            this.props.onReady();
        }
    }

    async getApplication(applicationId, errorCallback) {
        try {
            const response = await this.client.get(`/applications/${applicationId}`);
            return response.data;
        } catch (error) {
            this.handleError("getApplication", error, errorCallback)
        }
    }

    async getAllApplications(errorCallback) {
        try {
            const response = await this.client.get(`/applications/all`);
            return response.data;
        } catch(error) {
            this.handleError("getAllApplications", error, errorCallback);
        }
    }

<<<<<<< HEAD
    async createApplication(firstName, lastName, homeAddress, phoneNumber, emailAddress, objective, education, experience, skills,errorCallback) {
        try {
            const response = await this.client.post(`applications`, {
                firstName: firstName,
                lastName: lastName,
                homeAddress: homeAddress,
                phoneNumber: phoneNumber,
                emailAddress: emailAddress,
                objective: objective
                education: education
                experience: experience
                skills: skills
            });
            return response.data;
        } catch (error) {
            this.handleError("createApplication", error, errorCallback);
        }
    }
=======
     async createApplication(firstName, lastName, homeAddress, phoneNumber, emailAddress, objective, education, experience, skills,errorCallback) {
            try {
                const response = await this.client.post(`/user/${username}/application`, {
                    "firstName": firstName,
                    "lastName": lastName,
                    "homeAddress": homeAddress,
                    "phoneNumber": phoneNumber,
                    "emailAddress": emailAddress,
                    "objective": objective,
                    "education": education,
                    "experience": experience,
                    "skills": skills,
                    "workHistory": [workHistory],
                    "references": [references],
                    "positionTitle":positionTitle
                    "locations": [locations],
                    "minimumSalary": minimumSalary,
                    "openJobsLimit": openJobsLimit


                });
                return response.data;
            } catch (error) {
                this.handleError("createApplication", error, errorCallback);
            }
        }
>>>>>>> main

    async updateApplication(username, applicationId, errorCallback) {
        try {
            const response = await this.client.put(`/applications/${applicationId}`, {
                username: username,
                applicationId: applicationId,
            });
            return response.data;
        } catch (error) {
            this.handleError("updateApplication", error, errorCallback);
        }
    }

    handleError(method, error, errorCallback) {
        console.error(method + " failed - " + error);
        if (error.response.data.message !== undefined) {
            console.error(error.response.data.message);
        }
        if (errorCallback) {
            errorCallback(method + " failed - " + error);
        }
    }
}