package com.pairboardbackpj;

import com.pairboardbackpj.constant.BoardStatus;
import com.pairboardbackpj.domain.Board;
import com.pairboardbackpj.domain.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class PairBoardBackPjApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(PairBoardBackPjApplication.class, args);
    }

    private final BoardRepository boardRepository;

    @Override
    public void run(String... args) throws Exception{
//        boardRepository.save(Board.builder()
//                        .boardTitle("첫 번째 게시글")
//                        .boardContent("안녕하세요! 더미 데이터 첫 번째 글입니다.")
//                        .good(10)
//                        .bad(1)
//                        .pictureUrl("/images/개드립 페이지 html.png")
//                        .boardStatus(BoardStatus.GAME)
//                        .build());
//
//        boardRepository.save(Board.builder()
//                        .boardTitle("두 번째 게시글")
//                        .boardContent("테스트용으로 작성한 두 번째 글입니다.")
//                        .good(5)
//                        .bad(0)
//                        .pictureUrl("/images/abc3.jpg")
//                        .boardStatus(BoardStatus.SPORTS)
//                        .build());
//
//        boardRepository.save(Board.builder()
//                        .boardTitle("세 번째 게시글")
//                        .boardContent("오늘은 날씨가 좋네요 ☀️")
//                        .good(20)
//                        .bad(2)
//                        .pictureUrl("/images/img3.jpg")
//                        .boardStatus(BoardStatus.NOTICE)
//                        .build());
//        boardRepository.save(Board.builder()
//                        .boardTitle("네 번째 게시글")
//                        .boardContent("더미 데이터로 테스트하는 중입니다.")
//                        .good(3)
//                        .bad(0)
//                        .pictureUrl("/images/img4.jpg")
//                        .boardStatus(BoardStatus.CAR)
//                        .build());
//        boardRepository.save(Board.builder()
//                        .boardTitle("다섯 번째 게시글")
//                        .boardContent("마지막 테스트 게시글입니다.")
//                        .good(15)
//                        .bad(5)
//                        .pictureUrl("/images/img5.jpg")
//                        .boardStatus(BoardStatus.COMIC)
//                        .build());
//        boardRepository.save(Board.builder()
//                .boardTitle("여섯 번째 게시글")
//                .boardContent("게임에 대한 새로운 소식이 도착했습니다!")
//                .good(8)
//                .bad(0)
//                .pictureUrl("/images/game_news.jpg")
//                .boardStatus(BoardStatus.GAME)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("일곱 번째 게시글")
//                .boardContent("이번 주 스포츠 경기 일정 공유합니다.")
//                .good(12)
//                .bad(1)
//                .pictureUrl("/images/sports_schedule.jpg")
//                .boardStatus(BoardStatus.SPORTS)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("여덟 번째 게시글")
//                .boardContent("추천 영화 리스트 TOP 5 🎬")
//                .good(25)
//                .bad(3)
//                .pictureUrl("/images/movie_top5.jpg")
//                .boardStatus(BoardStatus.MOVIE)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("아홉 번째 게시글")
//                .boardContent("자동차 리뷰: 2025년형 전기차 시승기")
//                .good(18)
//                .bad(2)
//                .pictureUrl("/images/car_review.jpg")
//                .boardStatus(BoardStatus.CAR)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("열 번째 게시글")
//                .boardContent("이번 주 인기 만화 추천 📚")
//                .good(30)
//                .bad(0)
//                .pictureUrl("/images/comic_recommend.jpg")
//                .boardStatus(BoardStatus.COMIC)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("열한 번째 게시글")
//                .boardContent("공지사항: 서버 점검 안내")
//                .good(2)
//                .bad(0)
//                .pictureUrl("/images/notice_server.jpg")
//                .boardStatus(BoardStatus.NOTICE)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("열두 번째 게시글")
//                .boardContent("게임 커뮤니티 이벤트 안내 🎮")
//                .good(14)
//                .bad(1)
//                .pictureUrl("/images/game_event.jpg")
//                .boardStatus(BoardStatus.GAME)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("열세 번째 게시글")
//                .boardContent("스포츠 뉴스: 국가대표 선발 결과")
//                .good(9)
//                .bad(0)
//                .pictureUrl("/images/sports_news.jpg")
//                .boardStatus(BoardStatus.SPORTS)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("열네 번째 게시글")
//                .boardContent("영화 리뷰: '인터스텔라' 다시 보기")
//                .good(22)
//                .bad(4)
//                .pictureUrl("/images/movie_review.jpg")
//                .boardStatus(BoardStatus.MOVIE)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("열다섯 번째 게시글")
//                .boardContent("자동차 팁: 겨울철 차량 관리법")
//                .good(6)
//                .bad(0)
//                .pictureUrl("/images/car_tips.jpg")
//                .boardStatus(BoardStatus.CAR)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("열여섯 번째 게시글")
//                .boardContent("만화 이벤트: 팬아트 공모전 안내")
//                .good(17)
//                .bad(2)
//                .pictureUrl("/images/comic_event.jpg")
//                .boardStatus(BoardStatus.COMIC)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("열일곱 번째 게시글")
//                .boardContent("공지사항: 신규 기능 업데이트 안내")
//                .good(11)
//                .bad(1)
//                .pictureUrl("/images/notice_update.jpg")
//                .boardStatus(BoardStatus.NOTICE)
//                .build());
//        boardRepository.save(Board.builder()
//                .boardTitle("게임 소식: 신작 출시 예정")
//                .boardContent("다음 달 출시되는 기대작에 대한 정보가 공개되었습니다.")
//                .good(33)
//                .bad(2)
//                .pictureUrl("/images/game_newrelease.jpg")
//                .boardStatus(BoardStatus.GAME)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("게임 팁: 초보자 가이드")
//                .boardContent("처음 시작하는 유저를 위한 필수 팁 모음입니다.")
//                .good(21)
//                .bad(1)
//                .pictureUrl("/images/game_guide.jpg")
//                .boardStatus(BoardStatus.GAME)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("스포츠 분석: 경기 리뷰")
//                .boardContent("어제 열린 경기의 주요 장면과 분석을 정리했습니다.")
//                .good(19)
//                .bad(0)
//                .pictureUrl("/images/sports_review.jpg")
//                .boardStatus(BoardStatus.SPORTS)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("스포츠 토론: MVP 후보는?")
//                .boardContent("이번 시즌 최고의 선수는 누구일까요?")
//                .good(27)
//                .bad(3)
//                .pictureUrl("/images/sports_mvp.jpg")
//                .boardStatus(BoardStatus.SPORTS)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("영화 소식: 개봉 예정작 소개")
//                .boardContent("다음 달 개봉하는 기대작들을 미리 만나보세요.")
//                .good(40)
//                .bad(5)
//                .pictureUrl("/images/movie_upcoming.jpg")
//                .boardStatus(BoardStatus.MOVIE)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("영화 토론: 결말 해석")
//                .boardContent("영화의 열린 결말에 대한 다양한 해석을 공유합니다.")
//                .good(18)
//                .bad(2)
//                .pictureUrl("/images/movie_ending.jpg")
//                .boardStatus(BoardStatus.MOVIE)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("자동차 뉴스: 신모델 발표")
//                .boardContent("2026년형 SUV가 공개되었습니다. 주요 사양은?")
//                .good(14)
//                .bad(1)
//                .pictureUrl("/images/car_newmodel.jpg")
//                .boardStatus(BoardStatus.CAR)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("자동차 비교: 전기차 vs 하이브리드")
//                .boardContent("두 모델의 장단점을 비교해봤습니다.")
//                .good(22)
//                .bad(0)
//                .pictureUrl("/images/car_compare.jpg")
//                .boardStatus(BoardStatus.CAR)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("만화 리뷰: 이번 주 신간")
//                .boardContent("새롭게 출간된 만화책 리뷰입니다.")
//                .good(31)
//                .bad(3)
//                .pictureUrl("/images/comic_new.jpg")
//                .boardStatus(BoardStatus.COMIC)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("만화 토론: 인기 캐릭터 순위")
//                .boardContent("팬들이 뽑은 최고의 캐릭터는 누구일까요?")
//                .good(26)
//                .bad(2)
//                .pictureUrl("/images/comic_rank.jpg")
//                .boardStatus(BoardStatus.COMIC)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("공지사항: 커뮤니티 규칙 변경 안내")
//                .boardContent("새로운 운영 정책이 적용됩니다. 꼭 확인해주세요.")
//                .good(5)
//                .bad(0)
//                .pictureUrl("/images/notice_rules.jpg")
//                .boardStatus(BoardStatus.NOTICE)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("공지사항: 이벤트 당첨자 발표")
//                .boardContent("지난 이벤트의 당첨자를 공개합니다. 축하드립니다!")
//                .good(17)
//                .bad(1)
//                .pictureUrl("/images/notice_winner.jpg")
//                .boardStatus(BoardStatus.NOTICE)
//                .build());
//
//        boardRepository.save(Board.builder()
//                .boardTitle("공지사항: 서비스 점검 일정 안내")
//                .boardContent("이번 주말 서버 점검이 예정되어 있습니다.")
//                .good(9)
//                .bad(0)
//                .pictureUrl("/images/notice_maintenance.jpg")
//                .boardStatus(BoardStatus.NOTICE)
//                .build());
    }

}
