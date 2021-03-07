import loginForm from "../user/loginForm";
import Swal from "sweetalert2";

// const form = `
// <form id='form-snack'>
// <h1>Snack</h1>
//   <div class="form-group">
//   <div class="form-group">
//   <label for="snackId">Snack Id (For update/delete)</label>
//   <input type="text" class="form-control" id="snackId" placeholder="Enter snack ID" name="snackId">
// </div>
//     <label for="name">Name</label>
//     <input type="text" class="form-control" id="name" placeholder="Enter snack name" name="name">
//   </div>
//   <div class="form-group">
//     <label for="color">Snack Rating</label>
//     <input type="text" class="form-control" id="rating" placeholder="Enter snack rating out of 10" name="rating">
//   </div>
//   <button type="button" id="create-snack"  class="btn btn-primary btn-lg btn-block">Create Snack</button>
//   <button  type="button" id="update-snack"  class="btn btn-warning btn-sm"">Update Snack</button>
//   <button  type="button" id="delete-snack"  class="btn btn-danger btn-sm"">Delete Snack</button>
//   <button  type="button" id="logout"  class="btn btn-outline-danger btn-sm"">Logout</button>
//   </form>
// `;

const snackForm = () => {
  ///////////// CREATE - Event Listener ///////////
  $(document).on("click", "#create-snack", async (e) => {
    e.preventDefault();
    console.log($("#name").val());
    console.log($("#rating").val());

    // extract form info
    const requestBody = {
      name: $("#name").val(),
      rating: $("#rating").val(),
    };
    console.log("requestBody: ", requestBody);

    // POST request
    const response = await $.ajax({
      type: "POST",
      url: "http://localhost:3000/snacks/new",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    console.log("response", response);
    await Swal.fire(
      `Snack Added!`,
      `Snack: ${requestBody.name}, Rating: ${requestBody.rating}`,
      "success"
    );
    // window.alert("New snack created");
  });

  ////////// UPDATE - Event Listener ////////////////
  // TODO - hide snack ID, on button click popup with ID input box, return ID for API.
  $(document).on("click", "#update-snack", async (e) => {
    e.preventDefault();
    console.log($("#name").val());
    console.log($("#rating").val());

    // extract form info
    const requestBody = {
      name: $("#name").val(),
      rating: $("#rating").val(),
    };
    console.log("requestBody: ", requestBody);

    // PATCH request
    const response = await $.ajax({
      type: "PATCH",
      url: `http://localhost:3000/snacks/update/${$("#snackId").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    console.log("response", response);
    // window.alert(`${requestBody.name} updated!`);
    await Swal.fire(
      `Snack Updated!`,
      `Snack: ${requestBody.name}, Rating: ${requestBody.rating}`,
      "success"
    );
  });

  ////////// DELETE - Event Listener ////////////////
  // TODO - hide snack ID, on button click popup with ID input box, return ID for API.

  $(document).on("click", "#delete-snack", async (e) => {
    e.preventDefault();

    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log($("#name").val());
        console.log($("#rating").val());

        // extract form info
        const requestBody = {
          name: $("#name").val(),
          rating: $("#rating").val(),
        };
        console.log("requestBody: ", requestBody);

        // PATCH request
        const response = $.ajax({
          type: "DELETE",
          url: `http://localhost:3000/snacks/delete/${$("#snackId").val()}`,
          contentType: "application/json",
          data: JSON.stringify(requestBody),
        });
        console.log("deleted response", response);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  });

  // finally, return the form
  return form;
};

// Add logout form
$(document).on("click", "#logout", () => {
  $("body").empty();
  $("body").append(loginForm());
});

export default snackForm;
