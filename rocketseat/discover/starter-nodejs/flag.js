


module.exports = function getflag(flag) {

    const index = process.argv.indexOf(flag)+1;
    return process.argv[index];

}
