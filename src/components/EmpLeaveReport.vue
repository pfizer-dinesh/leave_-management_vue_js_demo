<template>
    <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Employee Leave Report</h2>
                        </div>
                   </div>
                  <div class="row">
                        <div class="col-xl-4 col-md-6 mb-4">
                          <div class="card border-left-primary shadow h-100 py-2">
                              <div class="card-body">
                                <h4 class="card-title font-weight-bold text-secondary text-uppercase mb-1">Total Leaves</h4>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">{{totalLeaves}}</div>
                                      </div>
                                      <div class="col-auto">
                                          <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-xl-4 col-md-6 mb-4">
                          <div class="card border-left-success shadow h-100 py-2">
                              <div class="card-body">
                                <h4 class="card-title font-weight-bold text-primary text-uppercase mb-1">Approved Leaves</h4>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">{{approvedLeaves}}</div>
                                      </div>
                                      <div class="col-auto">
                                          <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="col-xl-4 col-md-6 mb-4">
                          <div class="card border-left-warning shadow h-100 py-2">
                              <div class="card-body">
                                <h4 class="card-title font-weight-bold text-info text-uppercase mb-1">Pending Leaves</h4>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">{{pendingLeaves}}</div>
                                      </div>
                                      <div class="col-auto">
                                          <i class="fas fa-comments fa-2x text-gray-300"></i>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="row">
                          <div class="col-xl-4 col-md-6 mb-4">
                          <div class="card border-left-warning shadow h-100 py-2">
                              <div class="card-body">
                                <h4 class="card-title font-weight-bold text-muted text-uppercase mb-1"> Casual Leaves</h4>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">{{casualLeaves}}</div>
                                      </div>
                                      <div class="col-auto">
                                          <i class="fas fa-comments fa-2x text-gray-300"></i>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                     
                      <div class="col-xl-4 col-md-6 mb-4">
                          <div class="card border-left-warning shadow h-100 py-2">
                              <div class="card-body">
                                <h4 class="card-title font-weight-bold text-warning text-uppercase mb-1"> Sick Leaves</h4>
                                  <div class="row no-gutters align-items-center">
                                      <div class="col mr-2">
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">{{sickLeaves}}</div>
                                      </div>
                                      <div class="col-auto">
                                          <i class="fas fa-comments fa-2x text-gray-300"></i>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EmpLeaveReport",
  data() {
      return {
          totalLeaves: 0,
          approvedLeaves: 0,
          pendingLeaves: 0,
          casualLeaves: 0,
          sickLeaves: 0,
      }
  },
  created() {
      axios.get('http://localhost:3000/leave_data').then(res => {
          if(res.status == 200) {
              this.totalLeaves = res.data.length;
              this.approvedLeaves = (res.data.filter(filterData => filterData.leave_status == 'approved')).length;
              this.pendingLeaves = (res.data.filter(filterData => filterData.leave_status == 'pending')).length;
              this.casualLeaves = (res.data.filter(filterData => filterData.leave_type == 'casual')).length;
              this.sickLeaves = (res.data.filter(filterData => filterData.leave_type == 'sick')).length;
          }
      }).catch(error => {
          console.log(error);
      });
  }
}
</script>
Footer
