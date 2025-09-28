function sendMail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("msg from " + name);
    const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);

    const mailtoLink = "mailto:tolonenjere0@gmail.com?subject=" + subject + "&body=" + body;

    window.location.href = mailtoLink;
}