import React from 'react'

import { AreaLogin } from './styles'
import Api from '../../Api'

import { BtnIcons } from '../../components/Styled'
import FacebookIcon from '@material-ui/icons/Facebook'
import GTranslateIcon from '@material-ui/icons/GTranslate'
import GitHubIcon from '@material-ui/icons/GitHub'

const Page = ({ onReceiveGoogle }) => {
  const actionLoginGoogle = async () => {
    let result = await Api.googleLogin()

    if (result) {
      onReceiveGoogle(result.user)
    } else {
      alert('Error')
    }
  }

  return (
    <AreaLogin>
      <h1 className="title">Faça login em sua conta</h1>

      <BtnIcons>
        {' '}
        <FacebookIcon />
        <div className="center">Fazer login com o Facebook</div>
      </BtnIcons>
      <BtnIcons onClick={actionLoginGoogle}>
        <GTranslateIcon />
        <div className="center">Fazer login com o Google</div>
      </BtnIcons>
      <BtnIcons>
        <GitHubIcon />
        <div className="center">Fazer login com o Github</div>
      </BtnIcons>
    </AreaLogin>
  )
}

export default Page
