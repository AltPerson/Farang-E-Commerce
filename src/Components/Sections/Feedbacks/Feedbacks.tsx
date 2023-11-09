import Container from 'Components/Container/Container';
import styles from './Feedbacks.module.scss';
import { FC, SyntheticEvent, useContext, useEffect, useState } from 'react';
import Slider from 'Components/Slider/Slider';
import { sliderDataFeedback } from 'Data/sliderFeedBackData';
import { SliderData } from 'App/types/types';
import { checkFile } from 'Utils/checkFile';
import { feedBackSection } from 'Data/translation/feedBackSection';
import defaultImg from 'Assets/images/feedback/default.webp';
import Button from 'Components/Button/Button';
import { TranslateContext } from 'App/context/translateContext';

const Feedbacks: FC = () => {
  const { language } = useContext(TranslateContext);
  const [sliderData, setSliderData] = useState<SliderData[]>(
    sliderDataFeedback[language],
  );
  const [hint, setHint] = useState(false);

  const fileHandler = (e: SyntheticEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    if (inputElement.files.length === 1) {
      if (checkFile(inputElement)) {
        inputElement.value = '';
        setHint(true);
        setTimeout(() => {
          setHint(false);
        }, 1000);
      }
    }
  };

  const formHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    const tempObj: SliderData = {
      title: e.target[0].value,
      txt: e.target[1].value,
      img:
        (e.target[2].files.length === 1 &&
          window.URL.createObjectURL(e.target[2].files[0])) ||
        defaultImg,
    };
    setSliderData((prev) => [tempObj, ...prev]);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  };

  useEffect(() => {
    setSliderData(sliderDataFeedback[language]);
  }, [language]);
  return (
    <section className={styles.Feedbacks} id="feedback">
      <Container>
        <div className={styles.Wrapper}>
          <div className={styles.Title}>
            <h1>{feedBackSection[language]['title']}</h1>
          </div>
          <Slider sliderData={sliderData} />
          <div className={styles.FeedBackWrapper}>
            <h2>{feedBackSection[language]['formTitle']}</h2>
            <div className={styles.Form}>
              <form action="" onSubmit={formHandler}>
                <div className={styles.FormName}>
                  <label htmlFor="name">
                    {feedBackSection[language]['formName']}
                  </label>
                  <input type="name" id="name" required />
                </div>
                <div className={styles.FormText}>
                  <label htmlFor="message">
                    {feedBackSection[language]['formMessage']}
                  </label>
                  <input type="message" id="message" required />
                </div>
                <div className={styles.FormFile}>
                  <label htmlFor="file">
                    {feedBackSection[language]['formFile']}
                  </label>
                  <input
                    id="file"
                    type="file"
                    accept="image/png, image/jpeg,image/webp"
                    onChange={fileHandler}
                  />
                  {hint && (
                    <span className={styles.hint}>
                      {feedBackSection[language]['formHint']}
                    </span>
                  )}
                </div>
                <div className={styles.FormSend}>
                  <Button
                    text={feedBackSection[language]['formButton']}
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Feedbacks;
