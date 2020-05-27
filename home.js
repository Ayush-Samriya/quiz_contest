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
                } else {
                    console.log('check bx not checked')
                }

                // MAIN SIGN UP
                document.getElementById('spinner').innerHTML = `<div class="spinner-grow text-primary" role="status">
                                            <span class="sr-only">Loading...</span>
                                        </div>`;
                console.log('Checking')
            } else {
                alert('Error !! Password doesnot match the reset Repeat Password')
                Quit()
            }
        } else {
            alert('Error !! Empty Sets of Input')
        }
    }
}
