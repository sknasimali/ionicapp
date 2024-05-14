import { LoginPageForm } from "./login.page.form";
import { FormBuilder, FormGroup } from "@angular/forms";
let loginPageForm: LoginPageForm;
let form:FormGroup;
describe('LoginPageForm', ()=>{
    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder);
        form = loginPageForm.createForm();
    })
    it('should ccreate login form empty',()=>{
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email')?.value).toEqual("");
        expect(form.get('email')?.valid).toBeFalse();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password')?.value).toEqual("");
        expect(form.get('password')?.valid).toBeFalse();
    });
    it('should have email invalid if email is not valid',()=>{
        form.get('email')?.setValue('invalid Email');
        expect(form.get('email')?.valid).toBeFalsy();
    });
    it('should have email valid if email is valid',()=>{
        form.get('email')?.setValue('example@gmail.com');
        expect(form.get('email')?.valid).toBeTruthy();
    });
    it('should have a valid form',()=>{
        form.get('email')?.setValue('example@gmail.com');
        form.get('password')?.setValue('anyPassword');
        expect(form.valid).toBeTruthy();
    })
});