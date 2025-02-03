import { GoogleGenerativeAI } from '@google/generative-ai'
import dotenv from 'dotenv'

dotenv.config()
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Chatbot Behavior and Conversation Flow for Google Ads Generation\n\nIntroduction:\n\n\"Hi there! 👋 You're your virtual assistant, here to help you create a successful Google Ads campaign. You’ll walk you through a series of questions to gather details about user business and generate the perfect ad for you. Let’s get started!\"\n\nStep 1: Gather Basic Business Information\n\n\"First things first—what’s the name of your business?\"\n\"Great! Can you briefly describe what your business does?\"\n\"What’s your website URL? (If applicable)\"\n\"Where is your business located? (This helps in targeting your ads to the right audience)\"\nStep 2: Audience and Goals\n\n\"Who is your target audience? For example, are you targeting local customers, specific industries, or a global audience?\"\n\"What is the main goal of your Google Ads campaign? Are you focusing on increasing website traffic, generating leads, or promoting a specific product or service?\"\n\"Do you have a specific budget range for your ads? This helps us tailor your campaign for maximum effectiveness.\"\nStep 3: Ad Content and Targeting Preferences\n\n\"Let’s create your ad! What would you like the headline to be? This is the catchy part that grabs attention.\"\n\"Next, what message would you like to include in the ad description? Please keep it concise, highlighting your key offering.\"\n\"Do you have any specific keywords in mind that you want to target in your ad?\"\n\"Would you like your ad to target a specific geographic location? (e.g., specific cities, regions, or countries)\"\n\"Do you want to set up any special promotions or offers in your ad, such as discounts or limited-time offers?\"\nStep 4: Review and Finalization\n\n\"Great, you have all the information needed to generate your Google Ads. Here’s a quick review of what we’ve gathered:\"\nBusiness Name\nDescription\nWebsite URL\nTarget Audience & Budget\nAd Headline & Description\nKeywords & Geographic Targeting\nAny Special Offers\n\"Does everything look good? If so, I’ll generate the ad for you and walk you through the next steps.\"\nStep 5: Google Ads Creation\n\n\"I’m creating your Google Ads now! 🎉 This will only take a moment…\"\n\"Here’s your ad preview! Would you like to make any changes before finalizing the campaign?\"\nTone and Personality:\n\nUse a friendly, professional, and supportive tone.\nKeep the conversation concise yet engaging.\nEncourage user input with positive reinforcement (e.g., “Great job!” or “Thanks for sharing!”).\nMaintain a conversational flow, asking follow-up questions based on user responses.\nBe helpful and clear when explaining concepts related to Google Ads (especially if the user is unfamiliar with digital advertising).\n(give in JSON format and chatbot message should be like: message: 'message'  such that I can extract each messgae from the json)"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"steps\": [\n    {\n      \"step\": 0,\n      \"messages\": [\n        {\n          \"message\": \"Hi there! 👋 I'm your virtual assistant, here to help you create a successful Google Ads campaign. I'll walk you through a series of questions to gather details about your business and generate the perfect ad for you. Let's get started!\"\n        }\n      ]\n    },\n    {\n      \"step\": 1,\n      \"messages\": [\n         {\n          \"message\": \"First things first—what’s the name of your business?\"\n        },\n        {\n          \"message\": \"Great! Can you briefly describe what your business does?\"\n         },\n        {\n           \"message\": \"What’s your website URL? (If applicable)\"\n        },\n        {\n           \"message\": \"Where is your business located? (This helps in targeting your ads to the right audience)\"\n        }\n      ]\n    },\n    {\n      \"step\": 2,\n      \"messages\": [\n          {\n          \"message\":\"Who is your target audience? For example, are you targeting local customers, specific industries, or a global audience?\"\n        },\n         {\n          \"message\": \"What is the main goal of your Google Ads campaign? Are you focusing on increasing website traffic, generating leads, or promoting a specific product or service?\"\n        },\n        {\n         \"message\": \"Do you have a specific budget range for your ads? This helps us tailor your campaign for maximum effectiveness.\"\n        }\n      ]\n    },\n    {\n      \"step\": 3,\n      \"messages\": [\n          {\n           \"message\":\"Let’s create your ad! What would you like the headline to be? This is the catchy part that grabs attention.\"\n        },\n        {\n           \"message\":\"Next, what message would you like to include in the ad description? Please keep it concise, highlighting your key offering.\"\n        },\n        {\n            \"message\": \"Do you have any specific keywords in mind that you want to target in your ad?\"\n        },\n        {\n           \"message\":\"Would you like your ad to target a specific geographic location? (e.g., specific cities, regions, or countries)\"\n        },\n        {\n          \"message\":\"Do you want to set up any special promotions or offers in your ad, such as discounts or limited-time offers?\"\n        }\n      ]\n    },\n    {\n      \"step\": 4,\n       \"messages\": [\n          {\n          \"message\":\"Great, you have all the information needed to generate your Google Ads. Here’s a quick review of what we’ve gathered:\"\n         },\n         {\n          \"message\":\"Business Name,\"\n        },\n          {\n          \"message\":\"Description,\"\n        },\n          {\n          \"message\":\"Website URL,\"\n        },\n          {\n          \"message\":\"Target Audience & Budget,\"\n         },\n          {\n          \"message\":\"Ad Headline & Description,\"\n         },\n           {\n          \"message\":\"Keywords & Geographic Targeting,\"\n          },\n           {\n          \"message\":\"Any Special Offers,\"\n        },\n        {\n         \"message\":\"Does everything look good? If so, I’ll generate the ad for you and walk you through the next steps.\"\n        }\n      ]\n    },\n     {\n      \"step\": 5,\n      \"messages\": [\n         {\n          \"message\": \"I’m creating your Google Ads now! 🎉 This will only take a moment…\"\n        },\n        {\n          \"message\":\"Here’s your ad preview! Would you like to make any changes before finalizing the campaign?\"\n         }\n      ]\n    }\n\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  