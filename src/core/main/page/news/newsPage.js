import React, { Component, Fragment } from "react";
import "./newsPage.scss";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
const news1 = require(`../../../../access/images/image/news1.jpg`).default;
const news2 = require(`../../../../access/images/image/news2.jpg`).default;
class NewsPage extends Component {
  arrNews = [
    {
      id: 1,
      image: news1,
      text1:
        "Sự nghiệp của bộ ba ‘Người Nhện’ trên màn ảnh: Một vai diễn, ba định mệnh",
      textArr: [
        "Tuần trước, trailer của Spider-man: No way home ra mắt khán giả và người hâm mộ đã hi vọng vơi sự xuất hiện của những kẻ phản diện như Doc Octavius hay Electro, hai cựu Người Nhện là Tobey Maguire và Andrew Garfield sẽ trở lại. Dù vậy trước khi đợi liệu thông tin này có xác thực hay không, hãy cùng nhìn lại sự nghiệp của 3 chàng Người Nhện trên màn ảnh:",
        "Tobey Maguire tên thật là Tobias Vincent Maguire, anh sinh ngày 27/6/1975 ở Santa Monica bang California. Thời thơ ấu của của anh trôi qua không mấy êm đềm, cha mẹ ly dị khi anh mới lên hai tuổi và chàng trai năm ấy phải di chuyển liên tục giữa các thành phố để san sẻ tình yêu thương cho cả hai. Bù lại, cậu bé Tobey lại sở hữu cho mình một ngoại hình khôi ngô, làn da trắng trẻo nên đã được gọi đi đóng rất nhiều quảng cáo từ lúc bé.",
        "Dần dần, đam mê diễn xuất bắt đầu hình thành trong con người Tobey, cộng với việc kết thân cùng với nam tài tử khác là Leonardo Dicaprio, Tobey Maguire càng có động lực để đi thử vai và may mắn trúng tuyển làm Người Nhện đầu tiên trên màn ảnh rộng trong bộ phim Spider-Man (2002), cùng hai phần tiếp theo vào các năm 2004 và 2007.",
        "Tuy nhiên, mọi thứ thay đổi quá nhanh ở thời điểm phần phim thứ 3 của Spider-Man ra mắt. Tobey Maguire mắc bệnh sao, nói dối mình bị chấn thương để đòi Sony trả thù lao trên trời. Anh khẳng định mình không thể đóng những cảnh mạo hiểm trong phần phim thứ 3. Tệ hơn, Tobey khó chịu ra mặt, rồi đòi mức thù lao cao hơn nhà sản xuất Laura Ziskin khi biết bà nhận được 30 triệu USD sau phần phim thứ nhất.",
        "Andrew Garfield tên đầy đủ là Andrew Russell Garfield, mang hai quốc tịch Hoa Kỳ và Anh Quốc. Andrew sinh ra tại Los Angeles nhưng lớn lên tại Surrey. Ngay từ khi đi học, Andrew Garfield đã cực kỳ hăng hái tham gia các vở kịch tại trường. Khuôn mặt dí dỏm, luôn biết cách chọc cười đối phương đã giúp anh có cơ hội tham gia vào dòng phim tuổi teen trên truyền hình, tuy chỉ là những vai nhỏ lẻ nhưng cũng đủ khiến chàng trai trẻ hiểu rằng mình thực sự đang theo đuổi ước mơ.",
        "Sau The amazing of Spider-Man nhận được phản hồi khá tốt năm 2012, mọi thứ gần như bị sụp đổ vào năm 2014 khi The amazing of Spider-Man 2 được coi là thảm họa điện ảnh. Andrew cho rằng, những bình luận xấu, ác ý chĩa về phía The amazing spider-Man 2 hoàn toàn do lỗi của Sony. Thậm chí nam tài tử này còn bất ngờ hủy bỏ bữa tối gặp mặt các sếp lớn của Sony mà chỉ thông báo trước không đầy 1 tiếng đồng hồ. Do vậy, nhà sản xuất đã quyết định sa thải Andrew Garfield.",
      ],
      imageArr: [
        "https://thegioidienanh.vn/stores/news_dataimages/anhvu/082021/31/15/3244_2._Tobey_Maguire.jpg?rt=20210831153515",
        "https://thegioidienanh.vn/stores/news_dataimages/anhvu/082021/31/15/3246_2.1_Tobey_Maguire.jpg?rt=20210831153534",
        "https://thegioidienanh.vn/stores/news_dataimages/anhvu/082021/31/15/3249_3.1_Andrew_Garfield.jpg?rt=20210831153611",
        "https://thegioidienanh.vn/stores/news_dataimages/anhvu/082021/31/15/3250_4._Tom_Holland.jpg?rt=20210831153623",
        "https://thegioidienanh.vn/stores/news_dataimages/anhvu/082021/31/15/3252_4.1_Tom_Holland.jpg?rt=20210831153636",
      ],
    },
    {
      id: 2,
      image: news2,
      text1:
        "4 điểm khác biệt trong lần 'tái sinh' so thành công vang dội của 'Suicide Squad'",
      textArr: [
        "Là phần phim độc lập với Suicide Squad ra mắt năm 2016, The Suicide Squad đem tới những khác biệt đầy mới mẻ trong đội hình những siêu ác nhân có một không hai. Cùng xem so với người tiền nhiệm 5 năm trước, phần phim của đạo diễn James Gunn thay đổi như thế nào?",
        "Mặc dù kiếm được đến 750 triệu đô doanh thu phòng vé cho Suicide Squad năm 2016, đạo diễn David Ayer không tiếp tục sát cánh cùng DC trong phần hậu truyện. James Gunn – nhà làm phim từng thành công với Guardians of the Galaxy – là người được chọn mặt gửi vàng lần này. Vị đạo diễn kiêm biên kịch đã thổi một luồng gió mới vào bom tấn siêu anh hùng, với việc đem đến một câu chuyện hài hước, táo bạo và điên rồ nhất trên màn ảnh DC từ trước tới giờ",
        "The Suicide Squad nhận được vô số lời khen ngợi từ phía khán giả lẫn giới phê bình. Trang Rotten Tomatoes chấm 91% “tươi”, số điểm rất cao cho một tác phẩm siêu anh hùng giải trí. Tờ News.com.au viết: “Phim của Gunn cực kỳ hoang dã, loạn trí một cách thú vị và bạo lực máu me”, trong khi The Guardian cho rằng “sự tự tin tuyệt đối trong hỗn loạn của The Suicide Squad đã tạo nên những cảnh vô tiền khoáng hậu”. James Gunn sẽ tiếp tục gắn bó với DC trong các dự án tiếp theo mà gần nhất là phần phim riêng về Peacemaker do John Cena thủ vai, dự kiến ra mắt tháng 1/2022.",
        "Đổi lại, The Suicide Squad góp vui bằng dàn tội phạm siêu năng lực cực kỳ quái dị. Từ một con chồn (do em trai James Gunn là Sean Gunn thủ vai), một con quái vật nửa người tên King Shark siêu dễ thương nhưng lại thích ăn thịt người, cho đến một cô gái điều khiển chuột, một thanh niên biết tháo rời tay. Vị trí của Deadshot được trao cho Bloodsport – một lính đánh thuê dày dạn kinh nghiệm do Idris Elba thủ vai. Trong khi đó, sự độc lập của Harley Quinn cho thấy cô nàng không cần một hoàng tử nào của đời mình để sống hạnh phúc vui vẻ.",
        "Tất cả những thay đổi trên đem đến một đội hình cảm tử cực kỳ náo loạn và hài hước như những gì khán giả sẽ được thấy trên phim. Chứng kiến John Cena và Idris Elba cà khịa nhau trên màn ảnh thực sự là món quà vô giá mà James Gunn đem đến cho người hâm mộ. Không chỉ thế, những cái tên đông đảo chỉ khiến cho cốt truyện của The Suicide Squad thêm mười phần bất ngờ vì ngay cả những nhân vật quan trọng của phần một sang tới phần này lại có số phận “hên xui” vô cùng. Hãy bám chặt vào ghế và chờ đợi những cú “plot twist” bàng hoàng từ bộ phim nhé!",
        "Với James Gunn, làm một phim thân thiện với đại chúng và phòng vé không có nghĩa là phải gò ép phim siêu anh hùng vào một khuôn khổ. Đem tới thông điệp giải trí về một đội hình bạo lực, ngốc nghếch, bộ phim tự do phá vỡ những rào cản vô hình của điện ảnh. Chứng kiến King Shark “nhóp nhép” người trên màn ảnh thật sự là điều mới mẻ đối với các tín đồ siêu anh hùng. 10 phút đầu tiên của phim đã gói gọn tinh thần của tác phẩm: cháy nổ, bất ngờ, hài hước và… “bựa”, xứng đáng là trải nghiệm ai cũng nên trải qua tại rạp chiếu.",
      ],
      imageArr: [
        "https://thegioidienanh.vn/stores/news_dataimages/thanhtan/082021/27/10/in_article/0107_image002.jpg?rt=20210827100647",
        "https://thegioidienanh.vn/stores/news_dataimages/thanhtan/082021/27/10/in_article/0107_image003.jpg?rt=20210827100710",
        "https://thegioidienanh.vn/stores/news_dataimages/thanhtan/082021/27/10/in_article/0108_image004.jpg?rt=20210827100742",
        "https://thegioidienanh.vn/stores/news_dataimages/thanhtan/082021/27/10/in_article/0109_image012_1.jpg?rt=20210827100722",
        "https://thegioidienanh.vn/stores/news_dataimages/anhvu/082021/07/12/2905_07.jpg?rt=20210807123629",
      ],
    },
  ];
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  renderNews = () => {
    const { id } = this.props.match.params;
    let resule = "";
    let arrTemp = this.arrNews.filter((item) => item.id === parseInt(id));
    resule = arrTemp.map((item, i) => {
      return (
        <Fragment key={`vvgng${i}`}>
          <h2>{item.text1}</h2>
          <div className="item__img1">
            <img src={item.imageArr[0]} alt="..." />
          </div>
          <div className="item__text1">
            <p>{item.textArr[0]}</p>
          </div>
          <div className="item__img1">
            <img src={item.imageArr[1]} alt="..." />
          </div>
          <div className="item__text1">
            <p>{item.textArr[1]}</p>
          </div>
          <div className="item__img1">
            <img src={item.imageArr[2]} alt="..." />
          </div>
          <div className="item__text1">
            <p>{item.textArr[2]}</p>
          </div>
          <div className="item__img1">
            <img src={item.imageArr[3]} alt="..." />
          </div>
          <div className="item__text1">
            <p>{item.textArr[3]}</p>
          </div>
          <div className="item__img1">
            <img src={item.imageArr[4]} alt="..." />
          </div>
          <div className="item__text1">
            <p>{item.textArr[4]}</p>
            <p>{item.textArr[5]}</p>
          </div>
        </Fragment>
      );
    });
    return resule;
  };
  render() {
    return (
      <section className="news__page1">
        <div className="news__page--header">
          <h1>Tin Tức Điện Ảnh</h1>
        </div>
        <div className="news__page--body">{this.renderNews()}</div>
        <div className="news__page--foodter">
          <Link className="btn btn-warning" to="/">
            Quay Lại Trang Chủ
          </Link>
        </div>
      </section>
    );
  }
}

export default withRouter(NewsPage);
