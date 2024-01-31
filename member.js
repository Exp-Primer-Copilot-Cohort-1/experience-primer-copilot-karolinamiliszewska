function skillsMember() {
    var member = document.getElementById('member');
    var memberOption = member.options[member.selectedIndex].value;
    var memberSkill = document.getElementById('memberSkill');
    if (memberOption == 'yes') {
        memberSkill.style.display = 'block';
    } else if (memberOption == 'no') {
        memberSkill.style.display = 'none';
    }
}