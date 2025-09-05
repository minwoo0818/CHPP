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
        boardRepository.save(Board.builder()
                        .boardTitle("첫 번째 게시글")
                        .boardContent("안녕하세요! 더미 데이터 첫 번째 글입니다.")
                        .good(10)
                        .bad(1)
                        .pictureUrl("/images/개드립 페이지 html.jpg")
                        .boardStatus(BoardStatus.GAME)
                        .build());

        boardRepository.save(Board.builder()
                        .boardTitle("두 번째 게시글")
                        .boardContent("테스트용으로 작성한 두 번째 글입니다.")
                        .good(5)
                        .bad(0)
                        .pictureUrl("/images/img2.jpg")
                        .boardStatus(BoardStatus.SPORTS)
                        .build());

        boardRepository.save(Board.builder()
                        .boardTitle("세 번째 게시글")
                        .boardContent("오늘은 날씨가 좋네요 ☀️")
                        .good(20)
                        .bad(2)
                        .pictureUrl("/images/img3.jpg")
                        .boardStatus(BoardStatus.NOTICE)
                        .build());
        boardRepository.save(Board.builder()
                        .boardTitle("네 번째 게시글")
                        .boardContent("더미 데이터로 테스트하는 중입니다.")
                        .good(3)
                        .bad(0)
                        .pictureUrl("/images/img4.jpg")
                        .boardStatus(BoardStatus.CAR)
                        .build());
        boardRepository.save(Board.builder()
                        .boardTitle("다섯 번째 게시글")
                        .boardContent("마지막 테스트 게시글입니다.")
                        .good(15)
                        .bad(5)
                        .pictureUrl("/images/img5.jpg")
                        .boardStatus(BoardStatus.COMIC)
                        .build());
    }

}
