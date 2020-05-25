function swap() {
    if (document.getElementById('checkp2').innerHTML == ' Create a New Account ?') {

        document.getElementById('form_title').innerHTML = 'Sign up';
        document.getElementById('uname').innerHTML = `<label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                                <input type="text" name="name" id="name" placeholder="Your Name" />`;
        document.getElementById('re-pass').innerHTML = `<label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />`;
        document.getElementById('checkp').innerHTML = `<input style="margin: 0 0; width: 95px;" type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                                <label style="margin: 0 -20px; font-weight:bold;" for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in <a href="#" class="term-service" style="text-decoration: underline;" >Terms of service</a></label>`;
        document.getElementById('social-login').innerHTML = ``;
        document.getElementById('checkp2').innerHTML = `Already a Member ?`;
        document.getElementById("form-btn").innerHTML = 'Register';
    } else if (document.getElementById('checkp2').innerHTML == 'Already a Member ?') {
        document.getElementById('form_title').innerHTML = 'Log in';
        document.getElementById('uname').innerHTML = ``;
        document.getElementById('re-pass').innerHTML = ``;
        document.getElementById('checkp').innerHTML = `<input style="margin: 0 80px; width: 95px;" type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                            <label style="margin: 0 -110px;" for="agree-term" class="label-agree-term"><a href="#" class="term-service" style="text-decoration: underline; font-weight: bold;">Remind Me</a></label>`;
        document.getElementById('social-login').innerHTML = `<span class="social-label">Or login with </span>
                                        <span style="font-weight: bold; margin: 0 20px;">:</span>
                                        <ul class="socials" style="display: inline-flex; list-style: none; margin-left: -50px;">
                                            <li><a><i id="faceb" class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                            <li><a><i id="twit" class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                            <li><a><i id="google" class="display-flex-center zmdi zmdi-google"></i></a></li>
                                        </ul>`;
        document.getElementById('checkp2').innerHTML = ` Create a New Account ?`;
        document.getElementById("form-btn").innerHTML = 'Log in';
    }
}


function sign() {

	// var db = require('mysql');
	// const con = db.createConnection({
	// 	host:'localhost',
	// 	user: ''
	// })

    if (document.getElementById('form-btn').innerHTML == 'Log in') {
        e = document.getElementById('email').value;
        p = document.getElementById('pass').value;
        if (e != '' && e != null && p != '' && p != null) {
            if (document.getElementById('agree-term').checked) {
                console.log('check bx checked')
            }

            // MAIN LOGIN
            
            document.getElementById('spinner').innerHTML = `<div class="spinner-grow text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>`;
            console.log('Checking')
        } else {
            alert('Error !! Empty Sets of Input')
        }
    } else if (document.getElementById('form-btn').innerHTML == 'Register') {
        e = document.getElementById('email').value;
        p = document.getElementById('pass').value;
        rp = document.getElementById('re_pass').value;
        u = document.getElementById('name').value;
        if (e != '' && e != null && p != '' && p != null && u != '' && u != null & rp != '' && rp != null) {
            if (p == rp) {
                if (document.getElementById('agree-term').checked) {
                    console.log('check bx checked')
                }
                else{
                	console.log('check bx not checked')
                }

                // MAIN SIGN UP
                document.getElementById('spinner').innerHTML = `<div class="spinner-grow text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>`;
                console.log('Checking')
            }
            else{
            	alert('Error !! Password doesnot match the reset Repeat Password')
            }
        } else {
            alert('Error !! Empty Sets of Input')
        }
    }
}