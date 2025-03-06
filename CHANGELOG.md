# Change Log

## 0.4.0 - 2025/03/06

- Update @peaceroad/markdown-it-hr-sandwiched-semantic-container@0.4.2 (<- 0.3.1)
    - Fix the regular expression to check semantic labels.
    - I wanted to check the notation ex . 2024年5月31日追記 (when there is a string before the intrinsic label).
    - Add an option (removeJointAtLineEnd) to remove label joints if the label line ends with a label joint or is followed only by spaces.
- Adjust CSS.

Note. 75

## 0.3.0 - 2023/02/23

- Fix to require half-width spaces for half-width delimiters like "example.html"
- Mod to allow the insertion of important symbols before delimiters like "**example**. html"
- Not convert semantic terms at the beginning of bullet points, such as `- Notice: A list.`.
- Add semantic words.

## 0.2.2 - 2022/05/24

- ** Semantic** In Japanese, which I thought was fixed in 0.2.2, could not be processed if there was an element in the paragraph.

## 0.2.1 - 2022/05/24

- Temporary correction when Japanese semantic words are enclosed in **.
- Semantic word adjustment.

## 0.2.0 - 2021/07/21

- If only one paragraph is a semantics container, markdown typing may omit sandwiching two hr elements.
- Fix bugs.

## 0.1.1 - 2021/07/17

- Fix repository url.

## 0.1.0 - 2021/07/17

- Initial release