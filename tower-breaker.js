const fs = require("fs")

const args = process.argv.slice(2)
const input_file_path = args[0]
const items_per_row = parseInt(args[1])
const output_file_path = args[2]
const flags = args.slice(3)

let space_character = " "
let linebreak_character = "\n"

if(flags)
{
    if(flags.includes("--no-spaces"))
    {
        space_character = ""
    }

    if(flags.includes("--windows-linebreaks"))
    {
        linebreak_character = "\r\n"
    }
}

if(!input_file_path || !items_per_row || !output_file_path)
{
    console.error("Correct format is: thisprogram [input file path] [items per row] [output file path]")
    return false
}

const file_content = fs.readFileSync(input_file_path, 'utf8').trim()
const lines = file_content.split(/\r?\n/)

console.info(`Breaking ${input_file_path} with ${items_per_row} items per row...`)

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
        s += `${space_character}${line}${linebreak_character}`
        counter = 0
    }

    else
    {
        s += `${space_character}${line}`
    }
}

fs.writeFile(output_file_path, s, function(err) 
{
    if(err) 
    {
        return console.error(err)
    }

    console.info("Done!")
})