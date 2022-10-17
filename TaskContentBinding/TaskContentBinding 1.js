var user = {
    name: "Tom",
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format.bind(user)
tomFormat("<<<", ">>>");