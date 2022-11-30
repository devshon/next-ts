import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { Column, Media, Row } from 'styles/components/common/layout'
import { MainItem } from 'components/home/main-item'
import { SubItem } from 'components/home/sub-item'
import { HeaderWithFooter } from 'components/common/frame'
import { theme } from 'styles/theme'
import { ListItem } from 'components/home/list-item'
import { Float } from 'components/misc/float'
import { Loading } from 'components/common/loading'
import { BackgroundImage } from 'styles/components/home/image'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  })
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <HeaderWithFooter>
          <Column>
            <BackgroundImage
              url='/image/black-cover-2.jpeg'
              style={{ backgroundSize: 'auto' }}
            >
              <Row style={{ justifyContent: 'center' }}>
                <Column>
                  <Media>
                    <Row>
                      <MainItem
                        url='/image/item-11.jpeg'
                        title={`Flexible Developer`}
                        subject={`나의 가치를 발산시킬 수 있는 공간에서\n퍼니하고 해피하게 일하기`}
                      />
                      <Column>
                        <SubItem
                          url='/image/item-8.jpeg'
                          title={`Problem Create`}
                          subject={`문제 현상을 발견하고 창의적으로 발산하고\n근본 문제를 정의하는 것`}
                        />
                        <SubItem
                          url='/image/item-13.jpeg'
                          title={`Solution Search`}
                          subject={`문제만 정확히 정의했다면 해결은 쉽다`}
                        />
                      </Column>
                    </Row>
                  </Media>
                </Column>
              </Row>
            </BackgroundImage>
            <Column
              style={{
                backgroundColor: theme.color.background,
                padding: '50px 0',
              }}
            >
              <Media>
                <Row style={{ justifyContent: 'space-between' }}>
                  <Column style={{ gap: 40 }}>
                    <ListItem
                      imageUrl='/image/item-14.jpeg'
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                    <ListItem
                      imageUrl='/image/item-13.jpeg'
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                    <ListItem
                      imageUrl='/image/item-2.jpeg'
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                    <ListItem
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                  </Column>
                  <Column style={{ gap: 40 }}>
                    <ListItem
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                    <ListItem
                      imageUrl='/image/item-3.jpeg'
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                    <ListItem
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                    <ListItem
                      imageUrl='/image/item-4.jpeg'
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                  </Column>
                  <Column style={{ gap: 40 }}>
                    <ListItem
                      imageUrl='/image/item-16.jpeg'
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                    <ListItem
                      imageUrl='/image/item-8.jpeg'
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                    <ListItem
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                    <ListItem
                      imageUrl='/image/item-7.jpeg'
                      createdAt='2022-01-01'
                      title='오늘의 일기'
                      subject={`오늘 어쩌구 저쩌구 재밌게 놀았다.\n다음에도 재밌게 어쩌구 놀아야겠다.`}
                    />
                  </Column>
                </Row>
              </Media>
            </Column>
          </Column>
          <Float />
        </HeaderWithFooter>
      )}
    </>
  )
}

export default Home
