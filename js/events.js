/**
 * jQuery.deparam - The oposite of jQuery param. Creates an object of query string parameters.
 *
 * Credits for the idea and Regex:
 * http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
 */
 


var fake_id;

$(document).ready(function(){


  var id =localStorage.getItem('id');
  if(id==1){
    document.getElementById("event_head").src="../img/coloralo-back.svg"
  }
  if(id==2){
    document.getElementById("event_head").src="../img/mechavoltz-back.svg"
  }
  if(id==3){
    document.getElementById("event_head").src="../img/play-back.svg"
  }
  if(id==4){
    document.getElementById("event_head").src="../img/robotiles-back.svg"
  }
  if(id==5){
    document.getElementById("event_head").src="../img/wars-back.svg"
  }
  if(id==6){
    document.getElementById("event_head").src="../img/coderz-back.svg"
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      fake_id=data.data[0].id;
      data.data.map(function(item){
        $("#side_event").append('<li id="sidebarCollapse"><a onclick=get_description(this.id) id='+item.id+'>'+item.name+'</a></li>');
        var element = document.getElementById(fake_id);
        element.classList.add("active");
      });
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(this.responseText);
          if(data.data.winner1==5000) {
            document.getElementById("winner1").src="../img/5000.svg";
          }
          if(data.data.winner1==4000) {
            document.getElementById("winner1").src="../img/4000.svg";
          }
          if(data.data.winner1==3500) {
            document.getElementById("winner1").src="../img/3500-1.svg";
          }
          if(data.data.winner1==2500) {
            document.getElementById("winner1").src="../img/2500.svg";
          }
          if(data.data.winner1==2000) {
            document.getElementById("winner1").src="../img/2000.svg";
          }
          if(data.data.winner1==1500) {
            document.getElementById("winner1").src="../img/1500-1.svg";
          }
          if(data.data.winner1==1000) {
            document.getElementById("winner1").src="../img/1000-1.svg";
          }
          if(data.data.winner2==3500) {
            document.getElementById("winner2").src="../img/3500.svg";
          }
          if(data.data.winner2==3000) {
            document.getElementById("winner2").src="../img/3000-2.svg";
          }
          if(data.data.winner2==2000) {
            document.getElementById("winner2").src="../img/2000.svg";
          }
          if(data.data.winner2==1500) {
            document.getElementById("winner2").src="../img/1500.svg";
          }
          if(data.data.winner2==1000) {
            document.getElementById("winner2").src="../img/1000.svg";
          }
          if(data.data.winner2==500) {
            document.getElementById("winner2").src="../img/500.svg";
          }
          document.getElementById("event_title").innerHTML=data.data.name;
          document.getElementById("event_description").innerHTML=data.data.description;
          document.getElementById("contact_name").innerHTML=data.data.contact_name;
          document.getElementById("contact_number").innerHTML=data.data.contact_no;
          document.getElementById("register").href="http://register.zealicon.in/events/"+data.data.id;
        }
      };
      xhttp.open("GET", "http://backoffice.zealicon.in/api/event/"+fake_id, true);
      xhttp.send();
    }
  };
  xhttp.open("GET", "http://backoffice.zealicon.in/api/event/category/"+id, true);
  xhttp.send();
});

function get_description(id) {
  var element = document.getElementById('sidebar');
  element.classList.remove("active");
  var element=document.getElementById(fake_id);
  element.classList.remove('active');
  fake_id=id;
  var element=document.getElementById(fake_id);
  element.classList.add('active');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      // console.log(data.data.winner1);
      // console.log(data.data.winner2);
      if(data.data.winner1==5000) {
        document.getElementById("winner1").src="../img/5000.svg";
      }
      if(data.data.winner1==4000) {
        document.getElementById("winner1").src="../img/4000.svg";
      }
      if(data.data.winner1==3500) {
        document.getElementById("winner1").src="../img/3500-1.svg";
      }
      if(data.data.winner1==3000) {
        document.getElementById("winner1").src="../img/3000.svg";
      }
      if(data.data.winner1==2500) {
        document.getElementById("winner1").src="../img/2500.svg";
      }
      if(data.data.winner1==2000) {
        document.getElementById("winner1").src="../img/2000.svg";
      }
      if(data.data.winner1==1500) {
        document.getElementById("winner1").src="../img/1500-1.svg";
      }
      if(data.data.winner1==1000) {
        document.getElementById("winner1").src="../img/1000-1.svg";
      }
      if(data.data.winner2==3500) {
        document.getElementById("winner2").src="../img/3500.svg";
      }
      if(data.data.winner2==3000) {
        document.getElementById("winner2").src="../img/3000-2.svg";
      }

      if(data.data.winner2==2000) {
        document.getElementById("winner2").src="../img/2000.svg";
      }
      if(data.data.winner2==1500) {
        document.getElementById("winner2").src="../img/1500.svg";
      }
      if(data.data.winner2==1000) {
        document.getElementById("winner2").src="../img/1000.svg";
      }
      if(data.data.winner2==500) {
        document.getElementById("winner2").src="../img/500.svg";
      }
      document.getElementById("event_title").innerHTML=data.data.name;
      document.getElementById("event_description").innerHTML=data.data.description;
      document.getElementById("contact_name").innerHTML=data.data.contact_name;
      document.getElementById("contact_number").innerHTML=data.data.contact_no;
      document.getElementById("register").href="http://register.zealicon.in/events/"+id;
    }
  };
  xhttp.open("GET", "http://backoffice.zealicon.in/api/event/"+id, true);
  xhttp.send();
}
