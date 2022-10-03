<template>
    <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2>Leave Apply</h2>
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
                        <label class="pull-left">Select Employee</label>
                        <select v-model="empId" class="form-control">
                             <option v-for="emp in employee" :value="emp.id"  v-bind:key="emp.id">{{emp.first_name}} {{emp.last_name}}</option>
                         </select>
                    </div>
                    <div class="form-group">
                        <label class="pull-left">Leave Start Date</label>
                        <input type="date" class="form-control" v-model="leaveFrom"  placeholder="dd-mm-yyyy">
                    </div>
                    <div class="form-group">
                        <label class="pull-left">Leave End Date</label>
                        <input type="date" class="form-control" v-model="leaveTo"  placeholder="dd-mm-yyyy">
                    </div>
                    <div class="form-group">
                        <label class="pull-left">Leave Type</label>
                        <select v-model="leaveType" class="form-control">
                            <option value="casual">Casual</option>
                            <option value="sick">Sick</option>
                        </select>
                    </div>
    
                    <button type="button" @click="saveLeave()" class="btn btn-primary btn-submit">Submit</button>
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
                employee: [],
                message: "",
                leaveType: "casual",
                empId  : 1,
                savingSuccessful :false
            }
        },
   created: function() {
        axios
        .get('http://localhost:3000/employees')
        .then(res=>{
            this.employee = res.data;
        })
    },
        methods: {
            saveLeave: function() {
                let leaveData = {
                    emp_id : this.empId,
                    leave_from: this.leaveFrom,
                    leave_to: this.leaveTo,
                    leave_type: this.leaveType,
                    leave_status: 'pending',
                    approved_by: "Harshika Chhabra"
                }
            axios.post('http://localhost:3000/leave_data/', leaveData).then(res => {
                if(res.status == 201) {
                    this.savingSuccessful = true;
                    this.message = 'Leave saved successfully. You will get email when your manager will approve it.';
                    this.empId = '';
                    this.leaveFrom = '';
                    this.leaveTo = '';
                    this.leaveType = '';
                }
            }).catch(error => {
                this.message = 'Error occurred while creating leave request.';
                console.log(error);
            });
            
            }
        }
    }
    </script>