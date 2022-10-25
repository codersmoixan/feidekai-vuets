import { defineComponent, reactive } from "vue";
import styled from "vue3-styled-components";
import SearchIcon from "@/components/Icons/SearchIcon";
import makeStyles, { styled as makeStyled } from "vue3-makestyles";
import FormText from "@/components/FormFields/FormText";
import Buttons from "@/components/Buttons/Buttons";
import StyledInput from "@/views/StyledInput";
import { Button } from "@arco-design/web-vue";
import { useRouter } from "vue-router";
import routes from "@/router/routes";
import { useCounterStore } from "@/stores/counter";

const BlogContainer = styled.div`
  padding: 16px;
  background-color: #4caf50;
  & .store-name {
    font-weight: 700;
  }
  & .search {
    display: flex;
    align-items: center;
    margin-top: 16px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 0 16px rgb(0 0 0 / 8%);
    background-color: white;
    color: #a7a9ac;

    & .suffixName {
      color: red;
    }

    & .count {
      color: black;
    }

    & p {
      margin-left: 8px;
    }
  }

  & .count {
    display: flex;

    & .children {
      display: flex;
      width: 100px;
      height: 100px;
      background-color: blue;

      & .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        background-color: yellow;
      }

      & .right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        background-color: red;
      }
    }

    & .children-right {
      flex: 1;
      display: flex;
      & .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        background-color: #576b95;
      }
      & .right {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        background-color: white;
      }
    }
  }

  & .inner {
    color: black;
  }
`;

export default defineComponent({
  name: "Blog",
  props: {},
  setup(props) {
    const history = useRouter();
    const form = reactive({
      name: "里斯",
    });
    const store = useCounterStore();

    const handleClick = () => {
      console.log(form, 522);
      history.push(routes.catalog);
    };

    return () => (
      <>
        <BlogContainer>
          <p class="store-name">FitLine非德凯中国旗舰店小程序</p>
          <div class="search">
            <SearchIcon width={16} height={16} />
            <p class="suffixName">非德凯小红</p>
          </div>
          <div class="number">{store.counter}</div>
          <div class="count">
            <div class="children">
              <div class="left">left</div>
              <div class="right">right</div>
            </div>
            <div class="children-right">
              <div class="left">left</div>
              <div class="right">
                <div>
                  <div>
                    <div class="inner">9999</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button onClick={handleClick}>切换</Button>
        </BlogContainer>
      </>
    );
  },
});
