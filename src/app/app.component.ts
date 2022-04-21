import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultSubscription = "Advanced";
  submitted = false;

  data = {
    mail: "",
    subscription: "",
    password: "",
  };

  onSubmit(form: NgForm) {
    this.submitted = true;

    this.data.mail = this.signupForm.value.mail;
    this.data.subscription = this.signupForm.value.subscription;
    this.data.password = this.signupForm.value.password;

    console.log(this.data);
  }
}
