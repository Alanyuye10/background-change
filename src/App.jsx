import React, { useState } from "react"
import './App.css'

function App() {
  const [bgImage, setBgImage] = useState("https://i.pinimg.com/originals/28/27/68/28276846e682cae996dbecdf0aca660a.jpg");

  const themes = [
    {label: "うずまきナルト", url: "https://media1.giphy.com/media/g4N6wTrf1v6yQ/200.webp?cid=790b7611nalbgdpgo8a8nxg1fp2yvw9ma7jmax0dzm2m5ljo&ep=v1_gifs_search&rid=200.webp&ct=g"},
    {label: "日向ヒナタ", url: "https://media2.giphy.com/media/darauqjZo6FsA/200.webp?cid=790b76118mayrch5b6vgymt16qwqsz83z8n4u096ylc16ay7&ep=v1_gifs_search&rid=200.webp&ct=g"},
    {label: "うちはサスケ", url: "https://media0.giphy.com/media/I6wUi5eTdUCWI/200.webp?cid=790b7611uvnc3of9lzi19x7pyjrke0bnk41z2pfa4soc5wca&ep=v1_gifs_search&rid=200.webp&ct=g"},
    {label: "春野サクラ", url: "https://24.media.tumblr.com/2082e0b3f88d7b731157d033462ee666/tumblr_mprhp7LfVa1rirrbao1_500.gif"},
    {label: "はたけカカシ", url: "https://media4.giphy.com/media/AL8YW9byLb9Cg/200.webp?cid=790b76111lb429v4qjf339fexszo47gfdq0x9py1ie6c2euz&ep=v1_gifs_search&rid=200.webp&ct=g"},
  ];

  return (
    <div className="App" style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100vw"}}
    >
      <div className="content">
        <h1>ナルトアニメ</h1>
      </div>
      <div className="button-container">{themes.map((theme, index) => (<button key={index} onClick={() => setBgImage(theme.url)} className="theme-button">
        {theme.label}
      </button> 
    ))}
      </div>
    </div>
  );
}

export default App
