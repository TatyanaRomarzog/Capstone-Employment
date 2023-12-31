package com.kenzie.appserver.controller;

import com.kenzie.appserver.controller.model.ConnectionForUserResponse;
import com.kenzie.appserver.service.JobConnectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//todo

@RestController
public class JobConnectionController {

    private JobConnectionService connectionService;

    @Autowired
    JobConnectionController(JobConnectionService connectionService) {
        this.connectionService = connectionService;
    }

    @GetMapping("user/{username}/jobconnection/all")
    public ResponseEntity<List<ConnectionForUserResponse>> getAllJobsForUser(@PathVariable("username") String username) {
        return null;
    }

    @GetMapping("user/{username}/jobconnection/{connectionId}")
    public ResponseEntity<ConnectionForUserResponse> getJobForUser(@PathVariable("username") String username,
                                        @PathVariable("connectionId") String connectionId) {
        return null;
    }

    @DeleteMapping("user/{username}/jobconnection/{connectionId}")
    public ResponseEntity deleteJobForUser(@PathVariable("username") String username,
                                           @PathVariable("connectionId") String connectionId) {
        return null;
    }

    @GetMapping("/employer/{employerUsername}/jobconnection/all")
    public ResponseEntity getAllApplicantsForEmployer(@PathVariable("employerUsername") String username) {
        return null;
    }

    @GetMapping("/employer/{employerUsername}/jobconnection/{connectionId}")
    public ResponseEntity getApplicantForEmployer(@PathVariable("employerUsername") String username,
                                                  @PathVariable("connectionId") String connectionId) {
        return null;
    }

    @PutMapping("/employer/{employerUsername}/jobconnection/{connectionId}")
    public ResponseEntity updateStatusOfApplicant(@PathVariable("employerUsername") String username) {
        return null;
    }
}
