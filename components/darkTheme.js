const DarkTheme=()=>{
    return (
        <style jsx global>
          {`
            :root {
              --background-color: rgb(53, 53, 53);
              --text-color: white;
              --link-color: rgb(255, 153, 0);
            }
          `}
        </style>
    )
}

export default DarkTheme;