<template>
    <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2>Add New Employee</h2>
                </div>
            </div>
    <div class="row">
        <div class="col-md-12">
            <div  v-if="savingSuccessful" class="alert alert-primary success" role="alert">
                <h3>{{message}}</h3>
            </div>
            <div class="form-group">
                <form v-if="!savingSuccessful">
                   <div class="form-group">
                        <label class="pull-left" for="firstName">First Name</label>
                        <input type="text" class="form-control" v-model="firstName" placeholder="Enter Employee Name">
                    </div>
                    <div class="form-group">
                        <label class="pull-left" for="lastName">Last Name</label>
                        <input type="text" class="form-control" v-model="lastName" placeholder="Enter Employee Name">
                    </div>
                    <div class="form-group">
                        <label class="pull-left" for="empEmail">Email ID</label>
                        <input type="email" class="form-control" v-model="empEmail" aria-describedby="emailHelp" placeholder="Enter Employee email">
                    </div>
                    <button type="button" @click="saveEmployee()" class="btn btn-primary btn-submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
    </div>
    </template>
    <style>
    label {
        display: inline-block;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.5;
        color: #212529;
        text-align: left;
    }
    .pull-left {
        float: left;
        margin-top: 10px;
    }
    .btn-submit {
        margin-top: 10px;
        float: left;
    }
    </style>
    <script>
    import axios from "axios";
    export default {
        name: "LeaveApply",
        data() {
            return {
                savingSuccessful :false
            }
        },
        methods: {
            saveEmployee: function() {
                let employeeData = {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.empEmail
                }
            axios.post('http://localhost:3000/employees/', employeeData).then(res => {
                if(res.status == 201) {
                    this.savingSuccessful = true;
                    this.message = 'New employee saved successfully.';
                    this.firstName = '';
                    this.lastName = '';
                    this.empEmail = '';
                }
            }).catch(error => {
                this.message = 'Error occurred while adding new employee request.';
                console.log(error);
            });
            
            }
        }
    }
    </script>