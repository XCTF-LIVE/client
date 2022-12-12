import { Text, VStack, Image, HStack, Flex, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import axios from "axios";

const IMAGES = {
  NYSPHAA:
    "https://dbukjj6eu5tsf.cloudfront.net/nysphsaa.org/images/responsive_2021/main_logo-2.png",
  "Section I":
    "https://www.ercsd.org/cms/lib/NY02205564/Centricity/Domain/1022/BocesLogo-black.png",
  "Section II":
    "https://dbukjj6eu5tsf.cloudfront.net/section2athletics.org/images/responsive/main_logo.svg",
  "Section III": "https://section3.org/images/nav_logo_full.png",
  "Section IV":
    "https://cmsv2-assets.apptegy.net/uploads/8601/logo/9877/2eeca5251df5f5b4db947d3d80a1b083.png",
  "Section V":
    "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1579137011/wflbocesorg/bq5jv4yb3zvfglrve7yd/SectionVathleticsLogo2018.png",
  "Section VI":
    "https://www.section6.e1b.org/cms/lib/NY19000854/Centricity/Template/GlobalAssets/images///Logos/New_Section_VI_Logo_NEW.png",
  "Section VII":
    "http://section7.org/wp-content/uploads/2022/10/SecVII_LogoApproved_nobkgd.png",
  "Section VIII":
    "https://production-gofan-assets.s3.amazonaws.com/uploads/school/logo/NYSPHSAA8/Logo2017.png",
  "Section IX":
    "https://production-gofan-assets.s3.amazonaws.com/uploads/school/logo/NYSPHSAA9/Section%209%20Logo.png",
  "Section X ":
    "https://cfunity-state-association-logos.nfhsnetwork.com/d8bf013e7f_p403.png",
  "Section XI":
    "https://production-gofan-assets.s3.amazonaws.com/uploads/school/logo/NYSPHSAAXI/Logo_upload.png",
  CHSAA:
    "https://cdn1.sportngin.com/attachments/logo_graphic/6ef6-163770755/CatholicHSAthlAssoc_Crest_Blue_rev_medium.png",
  FLORIDA:
    "https://dbukjj6eu5tsf.cloudfront.net/fhsaa.org/images/responsive/main_logo_lg2.svg",
  "CHAMPS SPORTS": "https://footlockercc.com/images/ChampsXCLogo.gif",
  NEBRASKA:
    "https://nebraskanewsservice.net/wp-content/uploads/2020/07/download-12.png",
  CHICAGO:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chicago_Athletic_Association_logo.svg/1200px-Chicago_Athletic_Association_logo.svg.png",
  MONROE: "https://mcpsac.org/wp-content/uploads/2020/05/mcpsacgoldnew-1.png",
  PITTSFORD:
    "http://www.pittsfordbasketballcamp.com/img/pittsford_basketball_camp_mendon_vikings_logo.png",
  WALNUT:
    "http://s3-us-west-2.amazonaws.com/sportshub2-uploads-prod/files/sites/2965/2021/02/22044618/WalnutHills_Logo.png",
  USATF: "https://certifiedroadraces.com/.default/.assets/white-logo.png",
  LANDOVER: "https://mercyathletics.com/images/logos/site/site.png",
  BOWLING:
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Bowling_Green_Falcons_logo.svg/800px-Bowling_Green_Falcons_logo.svg.png",
  HILLSIDE:
    "https://lh3.googleusercontent.com/tJfwsT9by7O1chCTTSQSqTCI74yB1qCo_AlySzfOM4dnHD8QyKkQa_rpdOl_yNwb5TPPN2O6ry2qbtgEf4CwhuQ",
};

function returnImage(images: { [key: string]: string }, input: string) {
  // Convert the input string to lowercase
  // to avoid case-sensitivity issues
  input = input.toLowerCase();

  // Loop through the key-value pairs in the images object
  for (const [key, value] of Object.entries(images)) {
    // Check if the input string contains the key
    if (input.includes(key.toLowerCase())) {
      // If it does, return the corresponding value (the URL of the image)
      return value;
    }
  }
  // If the input string does not contain any of the keys,
  // return undefined
  return undefined;
}

type Item = {
  date: string;
  dateInput: string;
  isHighlighted: boolean;
  location: string;
  name: string;
  url: string;
  _id: string;
};

export default function MiniRaceCard({ item }: { item: Item }) {
  const toggleHighlight = (item: any) => {
    axios
      .post(
        process.env.REACT_APP_SERVER_API_URL_RACE + "/toggleracehighlight",
        {
          document: item,
        }
      )
      .then(() => window.location.reload());
  };
  return (
    <Link
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"100%"}
      px={5}
      py={2}
      bgColor="secondary.400"
      transitionDuration={"100ms"}
      _hover={{
        bgColor: "secondary.500",
        boxShadow: "lg",
      }}
      borderBottomWidth={"2px"}
      borderBottomColor={"secondary.600"}
      href={item.url}
      target={"_blank"}
    >
      <HStack w={"100%"} justifyContent={"space-between"}>
        <Flex width={20} justifyContent={"center"}>
          <Image
            height={10}
            objectFit={"cover"}
            src={returnImage(IMAGES, item.name + " , " + item.location)}
          />
        </Flex>
        <VStack alignItems={"left"} p={0} m={0}>
          <Text
            fontSize={"lg"}
            fontFamily={"body"}
            fontWeight={900}
            textTransform={"uppercase"}
            color={"grays.100"}
            textAlign={"center"}
          >
            {item.name}
            <Text
              color={"grays.300"}
              fontSize={"xs"}
              textTransform={"uppercase"}
            >
              {item.location +
                " // " +
                format(
                  new Date(item.date).setDate(
                    new Date(item.date).getDate() + 1
                  ),
                  "M/d"
                )}
            </Text>
          </Text>
        </VStack>
        <Flex
          width={20}
          justifyContent={"right"}
          _hover={{
            color: item.isHighlighted ? "#969326" : "#a1a1a1",
          }}
          color={item.isHighlighted ? "yellow" : "#666666"}
        >
          <FontAwesomeIcon
            icon={faStar}
            onClick={() => toggleHighlight(item)}
            size={"lg"}
          />
        </Flex>
      </HStack>
    </Link>
  );
}
