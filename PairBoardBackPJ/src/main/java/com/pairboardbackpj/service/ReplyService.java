//package com.pairboardbackpj.service;
//
//import com.pairboardbackpj.domain.Board;
//import com.pairboardbackpj.domain.Reply;
//import com.pairboardbackpj.domain.User;
//import com.pairboardbackpj.domain.repository.BoardRepository;
//import com.pairboardbackpj.domain.repository.UserRepository;
//import com.pairboardbackpj.dto.ReplyDto;
//import com.pairboardbackpj.repository.BoardRepository;
//import com.pairboardbackpj.repository.ReplyRepository;
//import com.pairboardbackpj.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//@RequiredArgsConstructor
//public class ReplyService {
//
//    private final ReplyRepository replyRepository;
//    private final BoardRepository boardRepository;
//    private final UserRepository userRepository;
//
//    public void createReply(ReplyDto dto) {
//        Board board = boardRepository.findById(dto.getBoardId())
//                .orElseThrow(() -> new RuntimeException("Board not found"));
//
//        User user = userRepository.findById(dto.getId())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        Reply reply = Reply.builder()
//                .replyContent(dto.getReplyContent())
//                .replyGood(dto.getReplyGood())
//                .replyBad(dto.getReplyBad())
//                .replyParentId(dto.getReplyParentId())
//                .totalCountReply(dto.getTotalCountReply())
//                .regTime(LocalDateTime.now())
//                .board(board)
//                .user(user)
//                .build();
//
//        replyRepository.save(reply);
//    }
//
//    public List<ReplyDto> getRepliesByBoard(Integer boardId) {
//        return replyRepository.findByBoard_BoardId(boardId).stream()
//                .map(reply -> ReplyDto.builder()
//                        .replyId(reply.getReplyId())
//                        .replyContent(reply.getReplyContent())
//                        .replyGood(reply.getReplyGood())
//                        .replyBad(reply.getReplyBad())
//                        .replyParentId(reply.getReplyParentId())
//                        .boardId(reply.getBoard().getBoardId())
//                        .id(reply.getUser().getId())
//                        .totalCountReply(reply.getTotalCountReply())
//                        .regTime(reply.getRegTime())
//                        .build())
//                .collect(Collectors.toList());
//    }
//}

