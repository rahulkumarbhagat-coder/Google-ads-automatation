export const extractBusinessInfo = (text) =>{
    if (!text.includes("Business Name") && !text.includes("Website URL") && !text.includes("Target Audience & Budget")) {
      return;
    }
    return {
      businessName : text.match(/Business Name:\s*([^,]+)/)?.[1] || '',
      description : text.match(/Description: \s*([^,]+)/)?.[1] || '',
      websiteURL : text.match(/Website URL: \s*([^,]+)/)?.[1] || '',
      targetAudience : text.match(/Target Audience([^,]+)/)?.[1] || '',
      budget : text.match(/Budget: \s*([^,]+)/)?.[1] || '',
      adHeadline : text.match(/Ad Headline & Description: \s*([^,]+)/)?.[1] || '',
      keywords : text.match(/Keywords & Geographic Targeting: \s*([^,]+)/)?.[1] || '',
      specialOffers : text.match(/Any Special Offers: \s*([^,]+)/)?.[1] || '',
    }
  }