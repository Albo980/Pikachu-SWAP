import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem, NotificationDot } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'
import { NextLinkFromReactRouter } from 'components/NextLink'

interface FarmTabButtonsProps {
  hasStakeInFinishedPools: boolean
}

const FarmTabButtons: React.FC<React.PropsWithChildren<FarmTabButtonsProps>> = ({ hasStakeInFinishedPools }) => {
  const router = useRouter()
  const { t } = useTranslation()

  let activeIndex
  switch (router.pathname) {
    case '/farms':
      activeIndex = 0
      break
    case '/farms/history':
      activeIndex = 1
      break
    case '/_mp/farms/history':
      activeIndex = 1
      break
    case '/farms/archived':
      activeIndex = 2
      break
    default:
      activeIndex = 0
      break
  }

  return (
    <Wrapper>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem as={NextLinkFromReactRouter} to="/farms">
          {t('Live')}
        </ButtonMenuItem>
        <NotificationDot show={hasStakeInFinishedPools}>
          <ButtonMenuItem as={NextLinkFromReactRouter} to="/farms/history" id="finished-farms-button">
            {t('Finished')}
          </ButtonMenuItem>
        </NotificationDot>
      </ButtonMenu>
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`
