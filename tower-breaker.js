const fs = require("fs")
const args = process.argv.slice(2)

let input_file_path
let items_per_row
let output_file_path
let item_separator = " "
let linebreak_character = "\n"

for(let i=0; i<args.length; i++)
{
    let arg = args[i]

    if(arg === "-i")
    {
        input_file_path = args[i + 1]
        i += 1
    }

    else if(arg === "-n")
    {
        items_per_row = parseInt(args[i + 1])
        i += 1
    }

    else if(arg === '-o')
    {
        output_file_path = args[i + 1]
        i += 1
    }

    else if(arg === "-sep")
    {
        item_separator = args[i + 1]
        i += 1
    }

    else if(arg === "--windows-linebreaks")
    {
        linebreak_character = "\r\n"
    }
}

if(!input_file_path || !items_per_row)
{
    console.error("Correct format is: thisprogram -i [input file path] -n [items per row] -o [Optional: output file path] [Optional flags]")
    return false
}

const file_content = fs.readFileSync(input_file_path, 'utf8').trim()
const lines = file_content.split(/\r?\n/)

let s = ""
let counter = 0

for(let line of lines)
{
    counter += 1
    
    line = line.trim()

    if(counter === 1)
    {
        s += `${line}`
    }

    else if(counter === items_per_row)
    {
        s += `${item_separator}${line}${linebreak_character}`
        counter = 0
    }

    else
    {
        s += `${item_separator}${line}`
    }
}

if(output_file_path)
{
    fs.writeFile(output_file_path, s, function(err) 
    {
        if(err) 
        {
            return console.error(err)
        }
    
        console.info("Done!")
    })
}

else
{
    console.info(s)
}
