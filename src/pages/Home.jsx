import { useState } from "react"
import QRCode from "react-qr-code"
import QRCodeLink from 'qrcode'

import { Header } from "../components/Header"

export const HomePage = () => {

  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  const handleGenerate = (link_url) => {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3
    }, (err, url) => {
      setQrcodeLink(url)
    })
  }

  const handleQrcode = (e) => {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className="flex flex-col mx-auto h-screen">

      <Header />

      <div className="flex flex-col items-center justify-center h-screen px-4">
        {
          link ?
            <div className="m-5 flex flex-col items-center justify-center p-8 max-w-xs w-full h-auto bg-zinc-600 rounded-3xl">

              <QRCode value={link}

                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}

                viewBox={`0 0 256 256`} />

            </div> :
            <h1 className="text-zinc-300 ">Digite seu o link para gerar o QrCode</h1>
        }


        <input
          className="focus:border-green-500 focus:border-2 h-11 max-w-xs w-full outline-none m-4 p-3"
          type="text"
          placeholder="Digite seu link"
          value={link}
          onChange={(e) => handleQrcode(e)}
        />
        {
          link &&
          <a className="bg-green-900 hover:bg-green-800  max-w-xs w-full py-3 text-center font-semibold  text-white" href={qrcodeLink} download={`${link}_qrcode.png`}>Donload QRCode</a>
        }

      </div>

    </div>
  )
}