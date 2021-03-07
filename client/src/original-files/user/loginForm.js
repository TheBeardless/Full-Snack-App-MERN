import registerForm from "./registerForm";
import snackForm from "../snack/snackForm";
import Swal from "sweetalert2";

const form = `
<form id="login-user">
  <h1>Login</h1>
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Please enter username" class="form-control">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Please enter password" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
  <button id="signup" class="btn btn-light">Signup</button>
</form>

`;

const loginForm = () => {
  $(document).on("submit", "#login-user", async (event) => {
    // console.log(`Event: = ${JSON.stringify(event)}`);
    // console.log("Event: ", event);
    event.preventDefault();

    const requestBody = {
      username: $("input[name='username']").val(),
      password: $("input[name='password']").val(),
    };

    // Validate user
    try {
      const response = await $.ajax({
        type: "POST",
        url: "http://localhost:3000/users/login",
        contentType: "application/json",
        data: JSON.stringify(requestBody),
      });
      // console.log("response", response);
      await Swal.fire(
        `Good job, ${requestBody.username}!`,
        "You're logged in",
        "success"
      );

      // clear form then load main app
      $("body").empty();
      $("body").append(snackForm());
    } catch (err) {
      Swal.fire("Incorrect Credentials");
    }

    //
  });

  return form;
};

// Add signin form
$(document).on("click", "#signup", () => {
  $("body").empty();
  $("body").append(registerForm());
});

export default loginForm;
