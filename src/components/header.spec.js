import React from 'react'
import renderer from 'react-test-renderer'

import {PureHeader as Header} from './header'

describe('Header', () => {
  const data = {
    appConfig: {
      socialLinks: [
        {
          href: '',
          icon: 'twitter'
        }
      ],
      navigation: [
        {
          value: '',
          page: '',
          href: '',
          active: true
        }
      ]
    }
  }

  const component = renderer
      .create(<Header siteTitle="Hashtag Coder" 
        data={data} />)

  it('should render', () => {
      expect(component.toJSON()).toMatchSnapshot()
  })
  
})