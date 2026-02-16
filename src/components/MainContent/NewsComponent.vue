<template>
  <hr :style="{ marginTop: '20px' }" />
  <div class="news_root">
    <article class="news_article">
      <img
        class="news_photo"
        src="https://resizer.mail.ru/p/30878b0f-705e-540f-aece-f4da0f5e77f8/AQAGRl_LDdtwtLkgzRc0DNPCJsq8HaUaxEncc1gdSLP_VYuZo7hDiWrKF8ff7VbHrZUNnGBl1Er8-QY2-ivxxy3gEgE.webp"
        alt=""
      />
      <div class="news_content">
        <h3 class="news_heading">
          Зимняя погода влияет на рейсы: аэропорт Кишинева работает в усиленном режиме
        </h3>
        <p class="news_text">
          Из-за неблагоприятных погодных условий и желтого кода возможны задержки рейсов, при этом
          все меры безопасности соблюдаются. В связи с суровыми погодными условиями и объявленным на
          текущие дни «желтым кодом» в Международный аэропорт Кишинева применяются специальные
          зимние процедуры, включая обязательную противообледенительную обработку воздушных судов.
        </p>
      </div>
    </article>
    <article class="news_article">
      <img
        class="news_photo"
        src="https://resizer.mail.ru/p/30878b0f-705e-540f-aece-f4da0f5e77f8/AQAGRl_LDdtwtLkgzRc0DNPCJsq8HaUaxEncc1gdSLP_VYuZo7hDiWrKF8ff7VbHrZUNnGBl1Er8-QY2-ivxxy3gEgE.webp"
        alt=""
      />
      <div class="news_content">
        <h3 class="news_heading">
          Зимняя погода влияет на рейсы: аэропорт Кишинева работает в усиленном режиме
        </h3>
        <p class="news_text">
          Из-за неблагоприятных погодных условий и желтого кода возможны задержки рейсов, при этом
          все меры безопасности соблюдаются. В связи с суровыми погодными условиями и объявленным на
          текущие дни «желтым кодом» в Международный аэропорт Кишинева применяются специальные
          зимние процедуры, включая обязательную противообледенительную обработку воздушных судов.
        </p>
      </div>
    </article>
    <article class="news_article">
      <img
        class="news_photo"
        src="https://resizer.mail.ru/p/30878b0f-705e-540f-aece-f4da0f5e77f8/AQAGRl_LDdtwtLkgzRc0DNPCJsq8HaUaxEncc1gdSLP_VYuZo7hDiWrKF8ff7VbHrZUNnGBl1Er8-QY2-ivxxy3gEgE.webp"
        alt=""
      />
      <div class="news_content">
        <h3 class="news_heading">
          Зимняя погода влияет на рейсы: аэропорт Кишинева работает в усиленном режиме
        </h3>
        <p class="news_text">
          Из-за неблагоприятных погодных условий и желтого кода возможны задержки рейсов, при этом
          все меры безопасности соблюдаются. В связи с суровыми погодными условиями и объявленным на
          текущие дни «желтым кодом» в Международный аэропорт Кишинева применяются специальные
          зимние процедуры, включая обязательную противообледенительную обработку воздушных судов.
        </p>
      </div>
    </article>
    <article class="news_article">
      <img
        class="news_photo"
        src="https://resizer.mail.ru/p/30878b0f-705e-540f-aece-f4da0f5e77f8/AQAGRl_LDdtwtLkgzRc0DNPCJsq8HaUaxEncc1gdSLP_VYuZo7hDiWrKF8ff7VbHrZUNnGBl1Er8-QY2-ivxxy3gEgE.webp"
        alt=""
      />
      <div class="news_content">
        <h3 class="news_heading">
          Зимняя погода влияет на рейсы: аэропорт Кишинева работает в усиленном режиме
        </h3>
        <p class="news_text">
          Из-за неблагоприятных погодных условий и желтого кода возможны задержки рейсов, при этом
          все меры безопасности соблюдаются. В связи с суровыми погодными условиями и объявленным на
          текущие дни «желтым кодом» в Международный аэропорт Кишинева применяются специальные
          зимние процедуры, включая обязательную противообледенительную обработку воздушных судов.
        </p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.news_root {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
}
.news_article {
  margin-top: 20px;
  display: flex;
  background-color: white;
  border-radius: 15px;
  width: 800px;
}
.news_photo {
  height: 200px;
  border-radius: 15px;
}
.news_content {
  padding: 10px;
}
.news_heading {
  font-weight: bold;
  font-size: 18px;
}
.news_text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
}
</style>
