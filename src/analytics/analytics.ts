let logged;

function sendAnalytics(data: string /*someParam: string*/) {
  console.log(data);
  logged = true;
  console.log(logged);
}

sendAnalytics("The data" /*, "some Param Data"*/);
