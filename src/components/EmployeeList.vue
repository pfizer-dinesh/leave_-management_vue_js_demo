<template>
<div class="container-fluid">
          <div class="row">
              <div class="col-md-12">
                    <h2>Employee List</h2>
              </div>
          </div>
          <div class="row">
            <div class="col-md-10">

            </div>
            <div class="col-md-2  mb-3">
              <router-link class="nav-link btn btn-primary" to="/add-employee">Add Employee</router-link>
            </div>
          </div>
      <div class="row">
        <div class="col-md-7"></div>
        <div class="col-md-2 mb-3">Filter By Name</div> 
          <div class="col-md-3 mb-3">
            <input type="search" class="form-control" v-model="searchQuery" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2">
        </div>
    </div>
    <div class="row">
        <div class="table-responsive">
        <table id="tableComponent" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filterEmployee" v-bind:key="user.id"> 
              <th scope="row">{{user.id}}</th>
              <td>{{user.first_name}}</td>
              <td>{{user.last_name}}</td>
              <td>{{user.email}}</td>
            </tr>
          </tbody>
        </table>
        </div> 
  </div>
</div>
</template>
<script>
  import axios from 'axios';
   export default {
    name: 'EmployeeList',
    components: {
    },
    data() {
      return {
        employee: [],
        searchQuery: '',
        filter:''
      };
    },
    created: function() {
      axios
      .get('http://localhost:3000/employees')
      .then(res=>{
        this.employee = res.data;
      })
    },
    computed: {
      filterEmployee: function() {
      return this.employee.filter(emp => {
        if(this.searchQuery == '') return true;
        return (emp.first_name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1 || emp.last_name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1); 
      })
    }
    }
  }
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
  .pull-right {
  float: right !important;
}
</style>