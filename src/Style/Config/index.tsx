import { ConfigProvider } from 'antd';
import { theme } from '../Theme';


interface IThemeConfig {
  children: React.ReactNode;
}


const ThemeConfig: React.FC<IThemeConfig> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: `${theme?.color?.white}`,
          colorBgContainerDisabled: `${theme?.color?.grayLight}`,
          colorBgTextHover: `${theme?.color?.primaryLight}`,
          colorBorder: `${theme?.color?.primary}`,
          colorError: `${theme?.color?.danger}`,
          colorLink: `${theme?.color?.black}`,
          colorLinkActive: `${theme?.color?.primary}`,
          colorLinkHover: `${theme?.color?.primary}`,
          colorPrimary: `${theme?.color?.primary}`,
          colorPrimaryActive: `${theme?.color?.primaryDark}`,
          colorPrimaryHover: `${theme?.color?.primaryDark}`,
          colorText: `${theme?.color?.black}`,
          colorTextPlaceholder: `${theme?.color?.primaryLight}`,
          colorTextDisabled: `${theme?.color?.gray}`,
          borderRadius: 8,
          controlHeight: 36,
          controlHeightSM: 30,
          controlOutline: `${theme?.color?.transparent}`,
          fontSize: 14,
          fontFamily: `${theme?.font?.family?.inter}`,
          fontSizeLG: 16,
          lineHeight: 1.4,
          controlPaddingHorizontal: 15,
          controlPaddingHorizontalSM: 10
        },
        components: {
          Layout: {
            bodyBg: `${theme?.color?.light}`,
            footerBg: `${theme?.color?.white}`,
            footerPadding: '20px 30px',
            headerBg: `${theme?.color?.white}`,
            headerHeight: 64,
            headerPadding: '0 30px',
            siderBg: `${theme?.color?.white}`,
            triggerBg: `${theme?.color?.light}`,
            triggerColor: `${theme?.color?.black}`,
            triggerHeight: 56
          },
          Menu: {
            darkItemBg: `${theme?.color?.white}`,
            darkItemColor: `${theme?.color?.black}`,
            darkItemHoverBg: `${theme?.color?.grayLight}`,
            darkItemHoverColor: `${theme?.color?.black}`,
            darkItemSelectedBg: `${theme?.color?.primaryLight}`,
            darkItemSelectedColor: `${theme?.color?.primary}`,
            darkItemDisabledColor: `${theme?.color?.grayLight}`,
            darkSubMenuItemBg: 'inherit',
            iconSize: 16,
            collapsedIconSize: 16,
            itemBorderRadius: 10,
            itemHeight: 42,
            itemMarginBlock: 6,
            itemMarginInline: 12
          },
          Form: {
            itemMarginBottom: 20,
            labelColor: `${theme?.color?.dark}`,
            labelFontSize: 14,
            labelHeight: 18,
            verticalLabelPadding: '0 0 6px',
            colorError: `${theme?.color?.danger}`,
            controlHeight: 44
          },
          Input: {
            borderRadius: 6,
            paddingInline: 26,
            paddingBlock: 7,
            lineHeight: 2,
            colorErrorText: `${theme?.color?.danger}`,
            colorBorder: `${theme?.color?.inputBorder}`,
            colorBgContainerDisabled: `${theme?.color?.inputDisabled}`,
            colorIcon: `${theme?.color?.inputIconClr}`,
            colorTextPlaceholder: `${theme?.color?.inputPlacefolderClr}`
          },
          Table: {
            // borderColor: `${theme?.color?.primaryLight}`,
            cellFontSizeSM: 14,
            headerBg: `${theme?.color?.primaryLight}`,
            headerColor: `${theme?.color?.black}`,
            rowHoverBg: `${theme?.color?.light}`,
            headerBorderRadius: 6,
            padding: 8
          },
          Pagination: {
            itemSize: 30,
            itemSizeSM: 30
          },
          Button: {
            defaultBorderColor: `${theme?.color?.primary}`,
            defaultColor: `${theme?.color?.primary}`,
            colorText: `${theme?.color?.primary}`,
            textHoverBg: `${theme?.color?.primaryDark}`,
            algorithm: true,
            controlHeight: 48,
            primaryShadow: 'none',
            borderRadius: 40,
            paddingInline: 24,
            fontSize: 14,
            fontWeight: 600
          },
          Divider: {
            colorSplit: '#D9D9D9'
          },
          Tabs: {
            cardBg: '#fgkjgf'
          },
          Typography: {
            fontFamilyCode: 'Foco Trial'
          },
          Modal: {
            borderRadiusLG: 10
          },
          Card: {
            borderRadiusLG: 0,
            lineType: 'none',
            paddingLG: 30,
            padding: 0,
            headerFontSize: 34,
            fontSize: 16
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
