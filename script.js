function uniqueCharacter(str) {
    if (str !== '' && str !== null) {
        str = str.split('').reduce((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {})
        for (let key in str) {
            if (str[key] == 1) {
                return key
            }
        }
    } else {
        return ''
    }
}

console.log(uniqueCharacter('The Tao gave birth to machine language.Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming"'));
console.log(uniqueCharacter('C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup'));