function eta_radu() {
    const oggi = new Date();
    const annoOggi = oggi.getFullYear();
    const meseOggi = oggi.getMonth() + 1; // I mesi partono da 0, quindi aggiungo 1
    const giornoOggi = oggi.getDate();

    const annoNascita = 1994;
    const meseNascita = 1; // Gennaio
    const giornoNascita = 23;

    let eta = annoOggi - annoNascita;

    // Controllo se non abbiamo ancora passato il compleanno di quest'anno
    if (meseOggi < 1 || (meseOggi === 1 && giornoOggi < 23)) {
        eta--;
    }
    else{
        eta;
    }

    return eta;
}

function print_eta() {
    //document.getElementById("eta").innerText = eta_radu();
    document.getElementById("eta").innerHTML = eta_radu();
}