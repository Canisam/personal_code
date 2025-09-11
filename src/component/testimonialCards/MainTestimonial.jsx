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
    <>
      <OuterDiv>
        {/* LEFT SECTION */}
        <InnerDivA>
          <ChildDivA>
            <CardSmall>
                 <TestimonialCard2></TestimonialCard2>
            </CardSmall>
            <CardSmall>
                <PhotoCardTestimonial></PhotoCardTestimonial>
            </CardSmall>
          </ChildDivA>
          <ChildDivB>
            <CardLarge>
                            <PhotoCardTestimonial2></PhotoCardTestimonial2>
                                 <TestimonialCard></TestimonialCard>

            </CardLarge>
          </ChildDivB>
        </InnerDivA>

        {/* RIGHT SECTION */}
        <InnerDivB>
          <ChildrenDivA>
            <CardSmall>
           
                      <PhotoCardTestimonial2></PhotoCardTestimonial2>
            </CardSmall>
            <CardSmall>
                <TestimonialCard1></TestimonialCard1>
                
            </CardSmall>  
          </ChildrenDivA>
          <ChildrenDivB>
            <CardSmall>
               <TestimonialCard2></TestimonialCard2>
            </CardSmall>
            <CardSmall>
                     <PhotoCardTestimonial></PhotoCardTestimonial>
            </CardSmall>
          </ChildrenDivB>
        </InnerDivB>
      </OuterDiv>
    </>
  )
}

export default MainTestimonial

// STYLES

const OuterDiv = styled('div')({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap"
})

const InnerDivA = styled('div')({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  flex: 1
})

const InnerDivB = styled('div')({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  flex: 1
})

const ChildDivA = styled('div')({
  display: "flex",
  gap: "20px"
})

const ChildDivB = styled('div')({
  display: "flex",
  justifyContent: "center"
})

const ChildrenDivA = styled('div')({
  display: "flex",
  gap: "20px"
})

const ChildrenDivB = styled('div')({
  display: "flex",
  gap: "20px"
})

// Card Styles
const CardSmall = styled('div')({

  flex: 1,

})

const CardLarge = styled('div')({


})
