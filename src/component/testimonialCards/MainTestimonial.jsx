import React from 'react'
import { styled } from '@mui/material'
import PhotoCardTestimonial from './photoCardTestimonial'
import PhotoCardTestimonial2 from './photoCardTestimonial2'
import TestimonialCard from './ReviewCard'
import TestimonialCard1 from './ReviewCard2'
import TestimonialCard2 from './ReviewCard3'

// Main Component
const MainTestimonial = () => {
  return (
    <OuterDiv>
      {/* LEFT SECTION */}
      <InnerDivA>
        <ChildDivA>
          <CardSmall>
            <TestimonialCard2 />
          </CardSmall>
          <CardSmall>
            <PhotoCardTestimonial />
          </CardSmall>
        </ChildDivA>
        <ChildDivB>
          <CardLarge>
            <PhotoCardTestimonial2 />
            <TestimonialCard />
          </CardLarge>
        </ChildDivB>
      </InnerDivA>

      {/* RIGHT SECTION */}
      <InnerDivB>
        <ChildrenDivA>
          <CardSmall>
            <PhotoCardTestimonial2 />
          </CardSmall>
          <CardSmall>
            <TestimonialCard1 />
          </CardSmall>
        </ChildrenDivA>
        <ChildrenDivB>
          <CardSmall>
            <TestimonialCard2 />
          </CardSmall>
          <CardSmall>
            <PhotoCardTestimonial />
          </CardSmall>
        </ChildrenDivB>
      </InnerDivB>
    </OuterDiv>
  )
}

export default MainTestimonial

// STYLES
const OuterDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  flexWrap: 'wrap',
  width: '100%',
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },
})

const InnerDivA = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  flex: 1,
  minWidth: 0,
})

const InnerDivB = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  flex: 1,
  minWidth: 0,
})

const ChildDivA = styled('div')({
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '15px',
  },
})

const ChildDivB = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

const ChildrenDivA = styled('div')({
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '15px',
  },
})

const ChildrenDivB = styled('div')({
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '15px',
  },
})

// Card Styles
const CardSmall = styled('div')({
  flex: 1,
  minWidth: '250px',
  maxWidth: '100%',
  '@media (max-width: 480px)': {
    minWidth: '100%',
  },
})

const CardLarge = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  minWidth: '250px',
  maxWidth: '100%',
})
