<div id="text">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div id="home-txt">
            <div class="second-text">
              <input type="text" placeholder="Search.." />
            </div>
            <div class="third-text">
              <table id="Employee" class="table table-striped">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            <div class="fouth-text">
              <p>Show 1 to 5 of 5 entries</p>
              <span>
                <p>previous</p>
                <button>1</button>
                <p>Next</p>
              </span>
            </div>
            
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-notification"
          role="tabpanel"
          aria-labelledby="pills-notification-tab"
        >
          <div id="blog-txt">
            <div class="wrapperfirst">
              <div class="first-text text-update">
                <span>
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Send Notification
                  </button>
              <a href="ViewNotification.php">
                <button class="notification notification-btn">  

                    View Notification
                  </button> 
                </a>
                </span>

                <!-- Modal -->
                <div
                  class="modal fade notification"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div class="alert-type">
                          <textarea placeholder="Type your message"></textarea>
                          <div class="button-sent">
                            <button>#Food34</button>
                            <select>
                                <option value="select an option">select an option</option>
                                <option value="Smiley">Smiley</option>
                                <option value="Yes/No">Yes/No</option>
                                <option value="Stars">Stars</option>
                            </select>
                            <button>Import from exel</button>
                            <button>send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="third-text third-text-update">
           <table id="Employee2" class="table table-striped">
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Passport no.</th>
                      <th>Designation</th>
                      <th>Dor</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
              <div class="fouth-text fouth-text-update">
                <p>Show 1 to 5 of 5 entries</p>
                <span>
                  <p>previous</p>
                  <button>1</button>
                  <p>Next</p>
                </span>
                
              </div>
            </div>

            <div class="view">
              <div class="head-view">
               <a href="hr.php"><i
                  class="bi bi-arrow-left-circle-fill"
                ></i></a>
                <h4>View notification</h4>
                <p></p>
              </div>
              <div class="box-view">
                <div class="box-view1">
                  <textarea></textarea>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Edit
                </button>
                <button>Delete</button>
              </div>
              <div class="box-view">
                <div class="box-view1">
                  <textarea></textarea>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Edit
                </button>
                <button>Delete</button>
              </div>
              <div
                class="modal fade edit"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="alert-type">
                        <textarea placeholder="Type your message"></textarea>
                        <div class="button-sent">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button>Update</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-ticket"
          role="tabpanel"
          aria-labelledby="pills-ticket-tab"
        >
          <div id="code-txt">
            <div class="wrappersecond">
            <div class="second-text">
              <input type="text" placeholder="Search.." />
            </div>
            <div class="third-text">
            <table id="Employee3" class="table table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Task</th>
                    <th>PDF</th>
                    <th>View</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            <div class="fouth-text">
              <p>Show 1 to 5 of 5 entries</p>
              <span>
                <p>previous</p>
                <button>1</button>
                <p>Next</p>
              </span>
            </div>
          </div>
            <div class="fifth-text">
       <a href="hr.php"><i
              class="bi bi-arrow-left-circle-fill"
            ></i></a>
              <div class="head-view">
               
              <div class="first-sem">
                <span class="users-head">
                  <p><b>Tickets view</b> (05)</p>
                </span>
                <span class="user-name">
                  <p>Name:</p>
                  <p>Name:</p>
                </span>
              </div>
              <div class="second-sem">
                <div class="second-1-theme">
                   <div class="sem1"><p>Name</p></div>
                  
                  <div class="sem-two"  id="messagedata">
                  </div> 
                </div>
                <div class="sem3">
                  <input type="text" placeholder="Type here..." />
                  <span>
                    <button>Send</button>
                    <button>Complete</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div
          class="tab-pane fade"
          id="pills-document"
          role="tabpanel"
          aria-labelledby="pills-document-tab"
        >
          <div class="second-text">
            <button
              class="btn btn-primary"
              data-bs-toggle="modal"
              href="#exampleModalToggle"
              role="button"
            >
              Add Details
            </button>
            <input type="text" placeholder="Search.." />
          </div>
          <div
            class="modal fade"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabindex="-1"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body form-body-wrap">
                  <div class="form-body">
                    <h4>Add Details</h4>
                    <div class="form-inp-body">
                      <div class="inp1">
                        <label for="Employee id">Employee id :</label>
                        <input
                          type="text"
                          placeholder=" Enter your employee id"
                        />
                      </div>
                      <div class="inp1">
                        <label for="Name">Name:</label>
                        <input type="text" placeholder=" Enter your name" />
                      </div>
                      <div class="inp-btn">
                        <button>Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="third-text">
         <table id="Employee4" class="table table-striped">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Document</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-graph"
          role="tabpanel"
          aria-labelledby="pills-graph-tab"
        >
          <div class="flex-last">
            <div class="wrap-flex">
              <div class="text-flex1 one-update">
                <div class="tab-maker">
                  <select>
                    <option value="">Serch here...</option>
                    <option value="">Salary Slip</option>
                    <option value="">PPE</option>
                  </select>
                </div>
                <input type="date" />
                <input type="date" />
                <button>Export</button>
              </div>
              <div class="text-flex1 two-update">
                <div id="myDiv">
                  <!-- Plotly chart will be drawn inside this DIV -->
                </div>
              </div>
            </div>
            <div class="text-flex1 three-update">
              <div id="myDiv1">
                <!-- Plotly chart will be drawn inside this DIV -->
              </div>
            </div>
          </div>
        </div>
        <div
        class="tab-pane fade"
        id="pills-review"
        role="tabpanel"
        aria-labelledby="pills-review-tab"
      >
      <table id="Employee-graph" class="table table-striped">
        <thead>
          <tr>
            <th>Code</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      
      </div>
      </div>
    </div>

  