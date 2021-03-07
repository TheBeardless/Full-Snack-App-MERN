import loginForm from "./loginForm";
import Swal from "sweetalert2";

const form = `
<form id="new-user">
  <h1>Sign Up</h1>
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Please enter username" class="form-control">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Please enter password" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>
  <button id="back" class="btn btn-light">Back</button>
</form>
`;

const registerForm = () => {
  $(document).on("submit", "#new-user", async (event) => {
    // console.log(`Event: = ${JSON.stringify(event)}`);
    console.log("Event: ", event);
    event.preventDefault();

    const requestBody = {
      username: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };
    // console.log(`Form data: ${formData}`);
    console.log("RequestBody: ", requestBody);

    try {
      const response = await $.ajax({
        type: "POST",
        url: "http://localhost:3000/users/register",
        contentType: "application/json",
        data: JSON.stringify(requestBody),
      });

      // clear form then load loginForm
      $("body").empty();
      $("body").append(loginForm());
    } catch (err) {
      $("body").append("<div>Could not sign up</div>");
    }
  });

  return form;
};

$(document).on("click", "#back", () => {
  // Add signin form
  $("body").empty();
  $("body").append(loginForm());
});

export default registerForm;
