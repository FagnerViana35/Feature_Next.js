import { theme } from "../../../src/assets/theme";
import { Box } from "../../components/Box";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Icon } from "../../components/Icon";
import { Image } from "../../components/Image";
import Input from "../../components/Input";
import { Text } from "../../components/Text";
import LinkRedirect from "../../components/link-direciomento";
import SideImage from "../SideImage";
import Head from "next/head";

export default function HomeScreen() {
  const LOGO_VIANA_URL = '/images/logo.jpeg';
    return (
      <Box>
        <Head>
          <title>
            Home - Fagne Viana Portifolio 
          </title>
        </Head>
        <Box
          as="main"
          styleSheet={{
            flex: 1,
            backgroundColor: theme.colors.neutral["050"],
          }}
        >
          <Box
            styleSheet={{
              overflow: 'hidden',
              position: {
                lg: 'relative',
              },
              paddingTop: {
                xs: theme.space.x6,
                sm: theme.space.x12,
              },
              paddingVertical: {
                md: theme.space.x20,
                lg: theme.space.x24,
              },
            }}
          >
            <Box
              styleSheet={{
                marginHorizontal: 'auto',
                paddingHorizontal: {
                  xs: theme.space.x4,
                  sm: theme.space.x6,
                  lg: theme.space.x8,
                },
                maxWidth: {
                  sm: theme.space.xcontainer_md,
                  lg: theme.space.xcontainer_lg,
                },
                display: {
                  lg: "grid",
                },
                gap: {
                  lg: theme.space.x24,
                },
                gridTemplateColumns: {
                  lg: "repeat(2, minmax(0, 1fr))",
                }
              }}
            >
              <Box>
                <Box>
                  <Image
                    styleSheet={{
                      width: "auto",
                      height: theme.space.x11,
                    }}
                    src={LOGO_VIANA_URL}
                    alt="Logo Viana"
                  />
                </Box>
                <Box
                  styleSheet={{
                    marginTop: {
                      xs: theme.space.x16,
                      sm: theme.space.x20,
                    },
                  }}
                >
                  <Box>
                    <LinkRedirect
                      href="/faq"
                      styleSheet={{
                        display: "inline-flex",
                        alignItems: {
                          xs: "flex-start",
                          sm: "center",
                        },
                        flexDirection: {
                          xs: "column",
                          sm: "row",
                        },
                      }}
                    >
                      <Text
                        styleSheet={{
                          textVariant: theme.typography.variants.body4,
                          fontWeight: "600",
                          borderRadius: theme.space.x64,
                          color: theme.colors.primary["400"],
                          backgroundColor: theme.colors.primary["100"],
                          paddingHorizontal: theme.space['x2.5'],
                          paddingVertical: theme.space['x1'],
                          marginRight: theme.space.x2,
                          marginBottom: {
                            xs: theme.space.x2,
                            sm: theme.space.x0
                          },
                        }}
                      >
                        O que tem de novo?
                      </Text>
                      <Text
                        styleSheet={{
                          textVariant: theme.typography.variants.body4,
                          fontWeight: "600",
                          display: 'inline-flex',
                          borderRadius: theme.space.x64,
                          color: theme.colors.primary["400"],
                          alignItems: 'center',
                        }}
                      >
                        <Text>Confira as principais dúvidas</Text>
                        <Icon
                          styleSheet={{
                            iconVariant: 'chevronRight',
                            marginLeft: theme.space.xpx,
                          }}
                          aria-hidden="true"
                        />
                      </Text>
                    </LinkRedirect>
                  </Box>
                  <Box
                    styleSheet={{
                      marginTop: theme.space.x6,
                      maxWidth: theme.space.xcontainer_sm,
                    }}
                  >
                    <Text
                      as="h1"
                      styleSheet={{
                        textVariant: theme.typography.variants.heading1,
                        color: theme.colors.neutral["900"],
                      }}
                    >
                      VIANA Cases
                    </Text>
                    <Text
                      as="p"
                      styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral["500"],
                        marginTop: theme.space.x6,
                      }}
                    >
                      Aqui você vai ter acesso a discussões avançadas: as principais decisões sobre arquitetura e design de sistemas. Aprenda através das descobertas que as principais empresas de tecnologia enfrentam!
                    </Text>
                    <Text
                      as="p"
                      styleSheet={{
                        textVariant: theme.typography.variants.body1,
                        color: theme.colors.neutral["500"],
                        marginTop: theme.space.x6,
                      }}
                    >
                      Quer testar antes de todo mundo?
                    </Text>
                  </Box>
                  <Box
                    as="form"
                    action="#"
                    styleSheet={{
                      display: {
                        sm: 'flex',
                      },
                      marginTop: theme.space.x12,
                      width: {
                        sm: theme.space['x1/1'],
                      },
                      maxWidth: {
                        sm: theme.space.xcontainer_lg,
                      }
                    }}
                  >
                    <Box
                      styleSheet={{
                        minWidth: 0,
                        flex: 1,
                      }}
                    >
                      <Text
                        as="label"
                        htmlFor="email"
                        styleSheet={{
                          srOnly: true,
                        }}
                      >
                        Email address
                      </Text>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Coloque seu email aqui"
                      />
                    </Box>
                    <Box 
                      styleSheet={{
                        marginTop: {
                          xs: theme.space.x4,
                          sm: theme.space.x0,
                        },
                        marginLeft: {
                          sm: theme.space.x3,
                        },
                      }}
                    >
                      <Button
                        type="submit"
                        // button variant
                      >
                        Cadastrar
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
  
            <SideImage />
          </Box>
        </Box>
        <Footer />
      </Box>
    )
  }